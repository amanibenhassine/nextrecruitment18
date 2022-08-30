import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../modals/candidate';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})

export class CandidateService {
   private candidate: Candidate;
   readonly baseURL = '/candidat';
   private headers =new HttpHeaders().set ('Content-Type' ,'application/json');


  constructor(private httpClient:HttpClient, private _snackbar: MatSnackBar) { }

  public createCandidate(candidate:Candidate , fileCV:File, fileLettre:File) {

  return this.httpClient.post(this.baseURL, candidate,{headers:this.headers});
  }

  public getCandidatesList(){
    console.log('test');
    return this.httpClient.get<any>("/candidats");
  }

  public getCandidate(id: number){
    return this.httpClient.get<Candidate>("/candidat"+"/"+ id);
  }

  public downloadFile(pathCv:String){
    
    return this.httpClient.get<any>("/downloadFile"+"/"+ pathCv);
  }

  public sendConfirmMessage(id:number){
    return this.httpClient.get<any>("/sendConfirmMessage/"+ id);
  }

  public sendDenyMessage(id:number){
    return this.httpClient.get<any>("/sendDenyMessage/"+ id);
  }

  deleteCandidate(id: number) {
    return this.httpClient.delete("/candidate/" + id);
      
  }

  toastMessage(message){
    this._snackbar.open(message, 'Close', {
      duration: 10000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
     })
  }

  

/*
  saveUserProfile(formData: FormData){
    return this.httpClient.post("http://localhost:8080/candidats/create", formData);
    
  }*/
}
