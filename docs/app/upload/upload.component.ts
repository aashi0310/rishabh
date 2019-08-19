import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { UploadService } from './upload.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

import { Upload } from '../../models/upload.model';
import { CommonService } from '../service/common.service';

const URL = 'http://localhost:4200/api/upload';

@Component({
  selector: 'app-upload-root',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [UploadService]
})
export class UploadComponent implements OnInit {
  title = 'app';
  public images: any[];
  public image_path;
  filesToUpload: Array<File> = [];
  public uploadDetails: Upload;

  constructor(private http: HttpClient, private UploadService: UploadService, private commonService: CommonService) {
    this.uploadDetails = new Upload();
  }

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i]['name']);
    }
    formData.append("title", this.uploadDetails.title);
    formData.append("description", this.uploadDetails.description);
    
    this.http.post('http://localhost:4200/api/upload', formData)
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
    this.UploadService.getAllImages().subscribe(result => {
      this.images = result['data'];
    });
  }
}