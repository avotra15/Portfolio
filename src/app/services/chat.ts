import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface ChatResponse {
  response: string;
}
@Injectable({
  providedIn: 'root',
})
export class Chat {
  private http = inject(HttpClient);

  private apiUrl = `${environment.apiUrl}/chat`;

  sendMessage(message: string): Observable<ChatResponse> {
    const payload = { message };
    return this.http.post<ChatResponse>(this.apiUrl, payload);
  }
}
