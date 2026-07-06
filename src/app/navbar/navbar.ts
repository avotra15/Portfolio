import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
  isMenuOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        const menuToggle = document.querySelector('.menu-toggle');
        menuToggle?.classList.toggle('active');
    }

    closeMenu() {
        this.isMenuOpen = false;
        const menuToggle = document.querySelector('.menu-toggle');
        menuToggle?.classList.remove('active');
    }

    toggleTheme() {
        document.body.classList.toggle('dark-mode');
        // Optionnel: sauvegarder la préférence dans localStorage
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode.toString());
    }

    ngOnInit() {
        // Charger la préférence de thème
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
}
