import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  openPdf() {
  window.open('assets/CV_Stanislas.pdf', '_blank');
}
}
