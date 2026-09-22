import { Component, inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-ai-chat',
  imports: [FormsModule, CommonModule],
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.css',
})

@Injectable({
  providedIn: 'root'
})

export class AiChat {
  isOpen = false;
  messages: { sender: string; text: string }[] = [];
  userInput = '';

  private httpClient = inject (HttpClient);

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage(message: string) {
    if (message.trim() === '') return;

    this.messages.push({ sender: 'user', text: message });
    this.getChatResponse(message);
  }

  getChatResponse(message: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    interface ChatResponse {
        response: string;
      }

    this.httpClient
      .post<ChatResponse>(`${environment.apiUrl}/chat`, { message }, { headers })
      .subscribe({
        next: (response) => {
          this.messages.push({ sender: 'ai', text: response.response });
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error occurred:', error);
        },
      });
    }
}
