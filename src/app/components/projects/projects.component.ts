import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
   // List of Photo landscape
   pLandscapes = [
    {src: 'img/paysage1.jpg', alt: 'P-1'},
    {src: 'img/paysage2.jpg', alt: 'P-2'},
    {src: 'img/paysage3.jpg', alt: 'P-3'},
    {src: 'img/paysage4.jpg', alt: 'P-4'},
    {src: 'img/paysage5.jpg', alt: 'P-5'},
    {src: 'img/paysage6.jpg', alt: 'P-6'},
    {src: 'img/paysage7.jpg', alt: 'P-7'},
    {src: 'img/paysage8.jpg', alt: 'P-8'}
  ];

  // selected image for the modal
  selectedImg: { src: string; alt: string} | null = null;

  // Open the modal
  openModal(pLandscape: {src: string; alt: string}): void {
    this.selectedImg = pLandscape;
  }

  // Close the modal
  closeModal(): void {
    this.selectedImg = null;
  }

}
