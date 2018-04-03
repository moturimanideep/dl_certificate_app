import { Component, OnInit } from '@angular/core';
import { Login } from '../entities/login.entity';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login;
  user: any;
  res: any;
  status: any = false;
  response: any;
  userDetailsForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  imgsrc = '../../../assets/logo1.png';
  
 
  constructor(private commonService:CommonService,private formBuilder: FormBuilder, private router: Router, private http: Http) { 
    this.login = new Login();
    this.userDetailsForm = new FormGroup({
      'email1': new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      'password1': new FormControl('',  Validators.compose([Validators.required, Validators.minLength(5)]))
     });
  }

  ngOnInit() {
  }
  loginuser(user: any){
    this.user = user;
    console.log(this.user);
    if(this.user.email == 'admin' && this.user.password == 'admin'){
        this.router.navigate(['/certifyform']);
    }else{
      this.status = true;
      this.res = 'Invalid Username/Password.'
    }
    // this.commonService.loginUser(this.user).subscribe( 
    //   (res) => { this.response = res;
    //      console.log(this.response);
    //      this.router.navigate(['/certify'])
    //  },                              
    //   (err) => { console.log(err); }
     
    //  );
    
  }
  verifyPage(){
    this.router.navigate(['/verifycertificate']);
  }

}
