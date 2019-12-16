import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Upload } from '../../models/upload.model';

@Injectable()
export class ProjectUploadService {

    constructor(private http: HttpClient) {

    }

    //Get Post
    getAllGallImages(id) {
        return this.http.post('/api/post/getAllGalleryImages/', { id: id })
    }

    //Delete Gallery
    deleteProjectImages(id) {
        return this.http.post('/api/post/deleteProjectImages', { id: id })
    }
}