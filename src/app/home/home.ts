import {  Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Aboutme } from '../aboutme/aboutme';
import { Skills } from '../skills/skills';
import { Work } from '../work/work';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule, Aboutme, Skills, Work, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home implements OnInit, OnDestroy {

  openPdf() {
    const link = document.createElement('a');
    link.href = 'assets/CV_Stanislas.pdf';
    link.download = 'CV_Stanislas_DEV.pdf';
    link.click();
  }

  // --- textes affichés (mis à jour progressivement par l'animation) ---
  texteNom = signal('');
  texteSuite = signal('');
  texteDesc = signal('');

  // --- contenu source ---
  private readonly contenuNom = "Stanislas";
  private readonly contenuSuite =
    " développeur passionné, spécialisé dans la création d'applications modernes et performantes.";
  private readonly contenuDesc =
    "Des solutions rapides, responsives et créatives, alliant technologie et design.";


  // --- durée cible (identique pour les 3 segments), en ms ---
  private readonly dureeParSegment = 1000;
  private timeoutIds: ReturnType<typeof setTimeout>[] = [];

   ngOnInit(): void {
    this.lancerAnimation();
  }

  ngOnDestroy(): void {
    this.timeoutIds.forEach(id => clearTimeout(id));
  }

  private lancerAnimation(): void {
    this.texteNom.set('');
    this.texteSuite.set('');
    this.texteDesc.set('');

        // vitesse = durée cible / nombre de caractères
    const vitesseNom = this.dureeParSegment / this.contenuNom.length;
    const vitesseSuite = this.dureeParSegment / this.contenuSuite.length;
    const vitesseDesc = this.dureeParSegment / this.contenuDesc.length;

    // 1) "Stanislas" s'écrit
    this.machineAEcrire(this.contenuNom, vitesseNom, (val) => this.texteNom.set(val), () => {

      // 2) puis la suite de la phrase
      this.machineAEcrire(this.contenuSuite, vitesseSuite, (val) => this.texteSuite.set(val), () => {

        // 3) puis le paragraphe du dessous
        this.machineAEcrire(this.contenuDesc, vitesseDesc, (val) => this.texteDesc.set(val));
      });
    });
  }

  private machineAEcrire(
    texte: string,
    vitesse: number,
    onUpdate: (val: string) => void,
    onComplete?: () => void
  ): void {
    let i = 0;

    const taper = () => {
      if (i < texte.length) {
        onUpdate(texte.slice(0, i + 1));
        i++;
        this.timeoutIds.push(setTimeout(taper, vitesse));
      } else if (onComplete) {
        onComplete();
      }
    };

    taper();
  }
}