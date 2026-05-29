import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Component, inject  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  private http = inject(HttpClient);
  private router = inject(Router); 

  onSubmit(): void {
    // Logique de traitement du formulair
    const body = {
        nm: this.nom,
        mail: this.email,
        msg: this.message
      };

  const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post('http://localhost:8080/api/contact', body, { headers })
    .subscribe({
      next: res => {
        console.log('Message envoyé avec succès', res);
        this.router.navigate(['/home']);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erreur lors de l\'envoi du message', err);
      },
    });
  }
}

