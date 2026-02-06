import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { Aboutme } from "../aboutme/aboutme";
import { Skills } from "../skills/skills";
import { Work } from "../work/work";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule, Aboutme, Skills, Work, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home {
  openPdf() {
    const link = document.createElement('a');
    link.href = 'assets/CV_Stanislas.pdf';
    link.download = 'CV_Stanislas.pdf';
    link.click();
}
}
