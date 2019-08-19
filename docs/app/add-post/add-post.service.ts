import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';

@Injectable()
export class AddPostService {

	constructor(private http: HttpClient){

	}
	
	//Add Post
	addPost(post: Post){
		return this.http.post('/api/post/createPost',{
			title : post.title,
			description : post.description
		})
	}

	//Update Post
	updatePost(post: Post){
		return this.http.post('/api/post/updatePost',{
			id: post._id,
			title : post.title,
			description : post.description
		})
	}

}