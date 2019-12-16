import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Post } from '../../models/post.model';
import { Upload } from '../../models/upload.model';

@Injectable()
export class CommonService {

	//Update after add post
	public postAdded_Observable = new Subject();

	//Update after add image
	public postAddedImage_Observable = new Subject();

	//Edit post
	public postEdit_Observable = new Subject();
	public post_to_be_edited;

	constructor(){
		this.post_to_be_edited = new Post();
	}

	//Notify after add post
	notifyPostAddition(){
		this.postAdded_Observable.next();
	}

	//Notify after add Image
	notifyImageAddition(){
		this.postAddedImage_Observable.next();
	}

	//Notify after edit post 
	notifyPostEdit(){
		this.postEdit_Observable.next();
	}
	 
	setPostToEdit(post: Post){
		this.post_to_be_edited = post;
		this.notifyPostEdit();
	}
}