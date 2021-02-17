import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CertificatesListComponent } from './certificates-list/certificates-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CertificateService} from "./_services/certificate.service";
import { PaginationFormComponent } from './shared/pagination-form/pagination-form.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {ErrorInterceptor} from "./_helpers/error.interceptor";
import {AuthenticationService} from "./_services/authentication.service";
import { UsersListComponent } from './users-list/users-list.component';
import {UserService} from "./_services/user.service";
import { OrderComponent } from './order/order.component';
import {OrderService} from "./_services/order.service";
import { CertificateFormComponent } from './certificate-form/certificate-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import { CertificateItemComponent } from './certificate-item/certificate-item.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'items', component: CertificatesListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'add-certificate', component: CertificateFormComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CertificatesListComponent,
    PaginationFormComponent,
    LoginComponent,
    UsersListComponent,
    OrderComponent,
    CertificateFormComponent,
    CertificateItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [CertificateService,
    AuthenticationService,
    UserService,
    OrderService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
