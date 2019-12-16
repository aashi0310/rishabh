import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShowPostService } from './show-post.service';

import { Post } from '../../models/post.model';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
  providers: [ShowPostService]
})
export class ShowPostComponent implements OnInit {

  public posts: any[];
  public post_to_delete;

  @ViewChild('closeBtn', { static: true }) closeBtn: ElementRef;

  constructor(private showPostService: ShowPostService, private commonService: CommonService) {

  }

  ngOnInit() {
    this.getAllPost();

    //to update post after adding 
    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });
  }

  //Get all post
  getAllPost() {
    this.showPostService.getAllPost().subscribe(result => {
      this.posts = result['data'];
    });
  }

  //Edit Post 
  editPost(post: Post) {
    this.commonService.setPostToEdit(post);
    console.log('post is ', post);
  }

  //Delete Post
  setDelete(post: Post) {
    this.post_to_delete = post;
  }
  unsetDelete() {
    this.post_to_delete = null;
  }

  deletePost() {
    this.showPostService.deletePost(this.post_to_delete._id).subscribe(res => {
      this.getAllPost();
      this.closeBtn.nativeElement.click();
    })
  }

}