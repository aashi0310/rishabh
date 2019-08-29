import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from '../root/root.component';

//pages
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UploadComponent } from './upload/upload.component';
import { IndexHomeComponent } from './index-home/index-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectUploadComponent } from './project-upload/project-upload.component';

//service
import { CommonService } from './service/common.service';


@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    ShowPostComponent,
    AddPostComponent,
    UploadComponent,
    IndexHomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectPageComponent,
    ProjectUploadComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [RootComponent]
})
export class AppModule { }