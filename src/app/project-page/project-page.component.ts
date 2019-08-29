import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent {
  public images: any[];
  constructor(private router: Router) {    
  }

}