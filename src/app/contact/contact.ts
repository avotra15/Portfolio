
import { HttpClient } from '@angular/common/http';
import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true,
})
export class Contact {

  nom = '';
  email = '';
  message = '';

  isLoading = false;
  succes = false;
  erreur = false;

  private readonly formspreeUrl = 'https://formspree.io/f/xzdndwqe';

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (!this.nom || !this.email || !this.message) {
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
        this.resetForm();
      },
      error: () => {
        this.erreur = true;
        this.isLoading = false;
      }
    });
  }

  private resetForm() {
    this.nom = '';
    this.email = '';
    this.message = '';
  }
}
