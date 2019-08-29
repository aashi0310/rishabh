import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-upload',
  templateUrl: './project-upload.component.html',
  styleUrls: ['./project-upload.component.scss']
})
export class ProjectUploadComponent {
  public images: any[];
  constructor(private router: Router) {    
  }
 

}