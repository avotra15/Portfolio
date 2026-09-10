import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface ChatResponse {
  response: string;
}
@Injectable({
  providedIn: 'root',
})
export class Chat {
  private apiUrl = 'http://127.0.0.1:8000/chat';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<ChatResponse> {
    const payload = { message };
    return this.http.post<ChatResponse>(this.apiUrl, payload);
  }
}
