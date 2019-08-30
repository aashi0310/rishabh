import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Upload } from '../../models/upload.model';

@Injectable()
export class ProjectPageService {

    
    constructor(private http: HttpClient) {

    }

    //Get Post
    getAllGallImages(id) {
        return this.http.post('/api/post/getAllGalleryImages/', {id : id})
    }


}