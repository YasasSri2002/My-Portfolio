import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
 
export class HeroComponent {

  jobs =[
    'software engineer',
    'web developer',
    'graphic designer'
  ]
    
}
