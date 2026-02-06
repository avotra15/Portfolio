import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule],
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
