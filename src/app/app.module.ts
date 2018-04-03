import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CertifyformComponent } from './certifyform/certifyform.component';
import { CertificateComponent } from './certificate/certificate.component';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule, MatButtonModule, MatCardModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifycertificateComponent } from './verifycertificate/verifycertificate.component';
import { LoginComponent } from './login/login.component';
import { CommonService } from '../app/common.service';

@NgModule({
  declarations: [
    AppComponent,
    CertifyformComponent,
    CertificateComponent,
    VerifycertificateComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,  AppRoutingModule, MatInputModule, MatButtonModule, MatCardModule, HttpModule,
    BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatSelectModule, FlexLayoutModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
