import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  openPdf() {
    const link = document.createElement('a');
    link.href = 'assets/CV_Stanislas.pdf';
    link.download = 'CV_Stanislas.pdf';
    link.click();
}
}
