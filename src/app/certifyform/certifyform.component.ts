import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { CertifyForm } from '../entities/certifyform.entity';

@Component({
  selector: 'app-certifyform',
  templateUrl: './certifyform.component.html',
  styleUrls: ['./certifyform.component.css']
})
export class CertifyformComponent implements OnInit {

  Certify: FormGroup;
  certifyForm: CertifyForm;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  mobilePattern = '[0-9]*';
  courses = [
    {value: 'Front End', viewValue: 'Front End'},
    {value: 'Devops', viewValue: 'Devops'},
    {value: 'Full Stack', viewValue: 'Full Stack'},
    {value: 'Python', viewValue: 'Python'},
    {value: 'Gaming', viewValue: 'Gaming'},
    {value: 'Design', viewValue: 'Design'},
    {value: 'Digital Marketing', viewValue: 'Digital Marketing'},
  ];
  constructor(private formBuilder: FormBuilder) { 
    this.certifyForm = new CertifyForm();
    this.Certify = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.pattern(this.emailPattern)],
      mobile: ['', Validators.required, Validators.pattern(this.mobilePattern)],
      courseIntrested: ['', Validators.required]
    })
  }

  ngOnInit() {
  }


  

}
