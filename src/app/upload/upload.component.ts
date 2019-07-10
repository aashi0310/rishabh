import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { UploadService } from './upload.service';

import { Upload } from '../../models/upload.model';
import { CommonService } from '../service/common.service';

const URL = 'http://localhost:4200/api/upload';

@Component({
  selector: 'app-upload-root',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [UploadService]
})
export class UploadComponent implements OnInit {
  title = 'app';
  public images: any[];

  constructor(private UploadService: UploadService, private commonService: CommonService) {

  }

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  ngOnInit() {
    this.getAllImages();

    //to update post after adding 
    this.commonService.postAddedImage_Observable.subscribe(res => {
      this.getAllImages();
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }

  //Get all images
  getAllImages() {
    this.UploadService.getAllImages().subscribe(result => {
      this.images = result['data'];
    });
  }
}