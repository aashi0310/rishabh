import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('addPost', { static: true }) addBtn: ElementRef;
  
  constructor(private commonService: CommonService, private router: Router) {

    this.commonService.postEdit_Observable.subscribe(res => {
      this.addBtn.nativeElement.click();
    });

  }

}