import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componets/header/header.component";
import { HeroComponent } from './componets/hero/hero.component';
import * as AOS from 'aos';
import { AboutMeComponent } from './componets/about-me/about-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,HeroComponent,AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  {
  title = 'Yasas';
  
  ngOnInit(){
      AOS.init();
  }
}

