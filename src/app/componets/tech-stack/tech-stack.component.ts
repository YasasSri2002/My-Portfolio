import { Component } from '@angular/core';


@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {

  Tools= [
        "Python",
        "Java",
        "Node.js",
        "Express.js",
        "Power Bi",
        "Matplotlib",
        "Pandas",
        "Illustrator",
        "Photoshop",
        "Canva",
        "wondershear",
        "capcut"
  ]

  Skills= [
      "Coding",
      "Data Visualization",
      "Graphic Design",
      "Video Editing"

  ]

}
