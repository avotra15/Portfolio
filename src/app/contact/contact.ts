
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true,
})
export class Contact {
  private http = inject(HttpClient);


  nom = '';
  email = '';
  message = '';

  isLoading = false;
  succes = false;
  erreur = false;

  private readonly formspreeUrl = 'https://formspree.io/f/xzdndwqe';

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;
    this.succes = false;
    this.erreur = false;

    const data = {
      nom: this.nom,
      email: this.email,
      message: this.message,
      _subject: `Nouveau message de ${this.nom} (portfolio)`,
      _replyto: this.email
    };

    this.http.post(this.formspreeUrl, data, {
      headers: { 'Accept': 'application/json' }
    }).subscribe({
      next: () => {
        this.succes = true;
        this.isLoading = false;
        this.resetForm(form);
      },
      error: () => {
        this.erreur = true;
        this.isLoading = false;
      }
    });
  }

  private resetForm(form: NgForm): void {
    form.resetForm(); // réinitialise aussi ng-touched, ng-dirty, etc.
  }
}
