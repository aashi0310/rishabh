import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { ProjectUploadService } from './project-upload.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

import { Upload } from '../../models/upload.model';
import { CommonService } from '../service/common.service';

const URL = 'http://localhost:4200/api/uploadgallery';

@Component({
  selector: 'app-project-upload',
  templateUrl: './project-upload.component.html',
  styleUrls: ['./project-upload.component.scss'],
  providers: [ProjectUploadService]
})

export class ProjectUploadComponent implements OnInit{
  title = 'app';
  public images: any[];
  public image_path;
  filesToUpload: Array<File> = [];
  public uploadDetails: Upload;
  public gallery_to_delete;

  constructor(private http: HttpClient, private ProjectUploadService: ProjectUploadService, private commonService: CommonService, private router: Router, private route: ActivatedRoute) {    
    this.uploadDetails = new Upload();
  }

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i]['name']);
    }
    const id = this.route.snapshot.paramMap.get('id');
    formData.append("parentgallery", id);

    this.http.post('http://localhost:4200/api/uploadgallery', formData)
      .map(files => files)
      .subscribe(files => console.log('files', files))
    this.commonService.notifyImageAddition();
  }
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  ngOnInit() {
    this.getAllImages();

    //to update post after adding 
    this.commonService.postAddedImage_Observable.subscribe(res => {
      this.getAllImages();
    });

  }

  //Get all images
  getAllImages() {
    this.ProjectUploadService.getAllImages().subscribe(result => {
      this.images = result['data'];
    });
  }

}