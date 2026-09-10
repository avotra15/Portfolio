import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { AiChat } from './ai-chat/ai-chat';

@Component({
  selector: 'app-root',
  imports: [Navbar,RouterOutlet, AiChat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
