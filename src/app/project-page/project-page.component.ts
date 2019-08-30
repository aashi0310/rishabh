import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectPageService } from './project-page.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  providers: [ProjectPageService]
})
export class ProjectPageComponent {
  public images: any[];
  constructor(private router: Router, private ProjectPageService: ProjectPageService, private route: ActivatedRoute) {    
  }

  ngOnInit() {
    this.getAllGallImages();
  }
 //Get all images
 getAllGallImages() {
    const id = this.route.snapshot.paramMap.get('id');
  this.ProjectPageService.getAllGallImages(id).subscribe(result => {
    this.images = result['data'];
  });
}
}