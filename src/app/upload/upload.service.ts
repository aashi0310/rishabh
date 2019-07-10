import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Upload } from '../../models/upload.model';

@Injectable()
export class UploadService {

    constructor(private http: HttpClient) {

    }

    //Get Post
    getAllImages() {
        return this.http.post('/api/post/getAllImages', {})
    }

}