import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { endpoints } from "..//..//environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  login:string=endpoints.loginUrl;

  constructor(private http:HttpClient) { }

  signIn(doctorPassword:string,doctorMobile:string,languageID:string,doctorDeviceID:string,apiType:string,apiVersion:string){
    let head= new HttpHeaders({
      'Access-Control-Allow-Origin' :'*'
    }).set('Content-Type','application/json');

  let body=JSON.stringify({doctorPassword:doctorPassword,doctorMobile:doctorMobile,languageID:languageID,
    doctorDeviceID:doctorDeviceID,apiType:apiType,apiVersion:apiVersion});
   return this.http.post(this.login,body,{headers:head});

  }

  // signIn(){
  //   let head= new HttpHeaders().set('Content-Type','application/json');
  //   let body=JSON.stringify(data);
  //   return this.http.post(this.login,body,{headers:head});
  // }
}

