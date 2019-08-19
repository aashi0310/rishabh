import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IndexHomeService} from './index-home.service'

@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.scss'],
  providers: [IndexHomeService]
})
export class IndexHomeComponent {
  public images: any[];
  constructor(private router: Router, private IndexHomeService: IndexHomeService) {    
  }
  ngOnInit() {
    this.getAllImages();
  }
  //Get all images
getAllImages() {
  this.IndexHomeService.getAllImages().subscribe(result => {
    this.images = result['data'];
  });
}
}