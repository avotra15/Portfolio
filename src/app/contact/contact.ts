
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule, ToastModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true,
  providers: [MessageService]
})
export class Contact {
  private http = inject(HttpClient);
  private messageService = inject(MessageService);


  nom = '';
  email = '';
  message = '';
  isLoading = false;

  private readonly formspreeUrl = 'https://formspree.io/f/xzdndwqe';

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;

    const data = {
      nom: this.nom,
      email: this.email,
      message: this.message,
      _subject: `Nouveau message de ${this.nom} (portfolio)`,
      _replyto: this.email
    };

    this.http.post(this.formspreeUrl, data, {
      headers: { Accept: 'application/json' }
    }).subscribe({
      next: () => {
        this.resetForm(form);
        this.isLoading = false;
        this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Message envoyé avec succès !', icon: 'pi pi-check-circle' });
      },
      error: () => {
        this.isLoading = false;
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Une erreur est survenue. Réessayez.', icon: 'pi pi-exclamation-triangle' });
      }
    });
  }

  private resetForm(form: NgForm): void {
    form.resetForm();
  }
}
