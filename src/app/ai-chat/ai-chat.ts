import { Component, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';import { catchError, throwError, timeout } from 'rxjs';
;

@Component({
  selector: 'app-ai-chat',
  imports: [FormsModule, CommonModule],
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.css',
})
export class AiChat {
  isOpen: boolean = false;
  messages: { sender: string; text: string }[] = [];
  userInput: string = '';

  private httpClient = inject(HttpClient);

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

    this.httpClient
      .post<any>('http://127.0.0.1:8000/chat', { message }, { headers })
      .subscribe({
        next: (response) => {
          this.messages.push({ sender: 'ai', text: response.response });
        },
        error: (error: any) => {
          console.error('Error occurred:', error);
        },
      });
    }
}
