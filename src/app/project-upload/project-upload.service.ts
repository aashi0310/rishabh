import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Upload } from '../../models/upload.model';

@Injectable()
export class ProjectUploadService {

    constructor(private http: HttpClient) {

    }

    //Get Post
    getAllImages() {
        return this.http.post('/api/post/getAllImages', {})
    }

    //Delete Gallery
    deleteGallery(id){
        return this.http.post('/api/post/deleteGallery',{id : id})
    }
}