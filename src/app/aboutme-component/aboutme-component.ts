import { Component } from '@angular/core';
import { SocialLink } from '../social-link/social-link';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-aboutme-component',
  imports: [SocialLink, Navbar],
  templateUrl: './aboutme-component.html',
  styleUrl: './aboutme-component.css',
})
export class AboutmeComponent {
}
