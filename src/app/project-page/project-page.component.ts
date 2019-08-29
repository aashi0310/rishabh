import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectPageService } from './project-page.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  providers: [ProjectPageService]
})
export class ProjectPageComponent {
  public images: any[];
  constructor(private router: Router, private ProjectPageService: ProjectPageService) {    
  }

  ngOnInit() {
    this.getAllImages();

  }
 //Get all images
 getAllImages() {
  this.ProjectPageService.getAllImages().subscribe(result => {
    this.images = result['data'];
  });
}
}