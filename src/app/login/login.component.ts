import { Component, OnInit } from '@angular/core';
import { Login } from '../entities/login.entity';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login;
  constructor() { 
    this.login = new Login();
  }

  ngOnInit() {
  }

}
