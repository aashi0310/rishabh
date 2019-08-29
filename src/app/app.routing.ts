import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { IndexHomeComponent } from './index-home/index-home.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectUploadComponent } from './project-upload/project-upload.component';

export const AppRoutes: Routes = [
    { path: '', component: IndexHomeComponent },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'upload', component: UploadComponent, pathMatch: 'full' },
    { path: 'projectpage/:id', component: ProjectPageComponent, pathMatch: 'full' },
    { path: 'projectupload/:id', component: ProjectUploadComponent, pathMatch: 'full' }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);