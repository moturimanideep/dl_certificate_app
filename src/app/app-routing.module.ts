import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CertifyformComponent } from './certifyform/certifyform.component';
import { CertificateComponent } from './certificate/certificate.component';
import { LoginComponent } from './login/login.component';
import { VerifycertificateComponent } from './verifycertificate/verifycertificate.component';
const routes: Routes = [ 
  { path: 'certifyform', component: CertifyformComponent },
  { path: 'certificate', component: CertificateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verifycertificate', component: VerifycertificateComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]

@NgModule({
  exports: [ RouterModule],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
