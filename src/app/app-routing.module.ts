import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./_helpers/auth.guard";
import {LoginComponent} from "./login/login.component";
import {CertificatesListComponent} from "./certificates-list/certificates-list.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {OrderComponent} from "./order/order.component";
import {CertificateFormComponent} from "./certificate-form/certificate-form.component";
import {CertificateItemComponent} from "./certificate-item/certificate-item.component";


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'certificates/:id', component: CertificateItemComponent},
  { path: 'certificates', component: CertificatesListComponent},
  { path: 'users', component: UsersListComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'add-certificate', component: CertificateFormComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
