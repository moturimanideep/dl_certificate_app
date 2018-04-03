import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class CommonService {
  url: string;
  constructor(private http: Http) { 
  }
  // loginUser(user): any{
  //   // this.url = '';
  //   // return this.http.post(this.url, user).map(response => {
  //   //   let data = response.json();
  //   //   return response.json();
  //   // })
  // }

  cerifyFormRest(obj: any){
    this.url = 'http://172.23.24.56:8080' + '/register';
    return this.http.post(this.url, obj).map(response => {
      let data = response.json();
      return response.json();
    })
  }








  verifyCertificate(obj: any){
    let object = obj;
    console.log(object);
    this.url = 'http://172.23.24.56:8080' + '/validate';
    return this.http.post(this.url, object).map(response => {
      let data = response.json();
      return response.json();
    })
  }
}
