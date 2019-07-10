import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';

export const AppRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'upload', component: UploadComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);