import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProjectPageService } from './project-page.service';
import { Upload } from '../../models/upload.model';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  providers: [ProjectPageService]
})
export class ProjectPageComponent implements OnInit {
  public images: any[];
  public loggedInUser;
  public images_to_delete;

  @ViewChild('closeBtn', { static: true }) closeBtn: ElementRef;

  constructor(private router: Router, private ProjectPageService: ProjectPageService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllGallImages();
    this.loggedInUser = localStorage.getItem('loggedInUser');
  }
  //Get all images
  getAllGallImages() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ProjectPageService.getAllGallImages(id).subscribe(result => {
      this.images = result['data'];
    });
  }

  //Delete gallery
  setDelete(image: Upload) {
    this.images_to_delete = image;
  }
  unsetDelete() {
    this.images_to_delete = null;
  }

  deleteProjectImage() {
    this.ProjectPageService.deleteProjectImages(this.images_to_delete._id).subscribe(res => {
      this.getAllGallImages();
      this.closeBtn.nativeElement.click();
    })
  }
}