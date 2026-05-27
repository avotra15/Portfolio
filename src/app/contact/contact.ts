import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
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
  nom: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient, private router: Router ) { }

  onSubmit(): void {
    // Logique de traitement du formulair
    const body = {
        nom: this.nom,
        email: this.email,
        message: this.message
      };

  const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post('http://localhost:8080/api/contact', body, { headers })
    .subscribe({
      next: res => {
        console.log('Message envoyé avec succès', res);
        this.router.navigate(['/home']);
      },
      error: err => {
        console.error('Erreur lors de l\'envoi du message', err);
      },
    });
  }
}

