import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface ChatResponse {
  response: string;
}
@Injectable({
  providedIn: 'root',
})
export class Chat {
  private http = inject(HttpClient);

  private apiUrl = 'http://127.0.0.1:8000/chat';

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  sendMessage(message: string): Observable<ChatResponse> {
    const payload = { message };
    return this.http.post<ChatResponse>(this.apiUrl, payload);
  }
}
