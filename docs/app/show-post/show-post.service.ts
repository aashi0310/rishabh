import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';
 
@Injectable()
export class ShowPostService {
 
    constructor(private http: HttpClient){
 
    }
    
    //Get Post
    getAllPost(){
        return this.http.post('/api/post/getAllPost',{})
    }

    //Delete Post
    deletePost(id){
        return this.http.post('/api/post/deletePost',{id : id})
    }
 
}