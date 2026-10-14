import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Projet {
  titre: string;
  resume: string;
  description: string;
  image: string;
  technos: { icone: string; alt: string }[];
}

@Component({
  selector: 'app-work',
  imports: [CommonModule],
  templateUrl: './work.html',
  styleUrl: './work.css',
  standalone: true,
})
export class Work {
  projetSelectionne: Projet | null = null;

  projets: Projet[] = [
          {
            titre: 'Dream Job',
            image: '/assets/images/dream_job.png',
            resume: 'Plateforme de recherche d’emploi avec analyse des candidatures par IA.',
            description: `Notre plateforme pour trouver rapidement les meilleures opportunités professionnelles.
      Consultez des offres adaptées à votre profil, postulez facilement et bénéficiez de l’intelligence artificielle (IA) pour évaluer et analyser les candidatures, faciliter le travail des recruteurs et identifier les profils les plus pertinents.`,
            technos: [
              { icone: '/assets/icones/javascript.png', alt: 'javascript' },
              { icone: '/assets/icones/symfony.png', alt: 'symfony' },
              { icone: '/assets/icones/postgrey.png', alt: 'postgresql' }
            ]
          },
          {
            titre: 'TaskFlow Pro',
            image: '/assets/images/taskflow_pro.png',
            resume: 'Solution de gestion de projet nouvelle génération pour les équipes.',
            description: `TaskFlow Pro est la solution de gestion de projet nouvelle génération qui révolutionne la façon dont vos équipes collaborent et atteignent leurs objectifs.

      Le défi
      Dans un environnement professionnel en constante évolution, les équipes perdent un temps précieux à coordonner leurs tâches, à rechercher l'information dispersée et à suivre manuellement l'avancement des projets.

      Notre solution
      TaskFlow Pro offre une plateforme unifiée où chaque membre de votre équipe peut visualiser, gérer et faire progresser ses tâches en temps réel.

      Les bénéfices concrets
      - Gain de productivité immédiat : réduisez le temps de coordination de 40%
      - Visibilité totale : suivez l'avancement de tous vos projets en un coup d'œil
      - Responsabilisation des équipes : chacun sait ce qu'il doit faire et quand
      - Prise de décision éclairée : des données en temps réel`,
            technos: [
              { icone: '/assets/icones/javascript.png', alt: 'javascript' },
              { icone: '/assets/icones/angular.png', alt: 'angular' },
              { icone: '/assets/icones/symfony.png', alt: 'symfony' },
              { icone: '/assets/icones/mysql.png', alt: 'mysql' }
            ]
          },
          {
            titre: 'My Portfolio Pro',
            image: '/assets/images/portfolio.png',
            resume: 'Mon portfolio centralisé, développé avec Angular et Symfony.',
            description: `Ce portfolio constitue ma solution centralisée pour présenter mon expertise professionnelle de manière cohérente et accessible.

      En tant que développeur mobile spécialisé, ce projet marque une étape importante dans mon évolution : maîtriser le développement web full-stack avec Angular pour le frontend et Symfony pour le backend.

      Développé avec Angular et propulsé par Symfony côté serveur, ce site allie excellence technique, expérience utilisateur fluide et esthétique professionnelle.`,
            technos: [
              { icone: '/assets/icones/angular.png', alt: 'angular' },
              { icone: '/assets/icones/symfony.png', alt: 'symfony' },
              { icone: '/assets/icones/postgrey.png', alt: 'postgresql' }
            ]
          }
        ];
  selectionnerProjet(projet: Projet): void {
    this.projetSelectionne = projet;
    document.body.style.overflow = 'hidden';
  }

  fermerModal(): void {
    this.projetSelectionne = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.espace')
  onEscape(): void {
    if (this.projetSelectionne) this.fermerModal();
  }
}
