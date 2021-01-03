import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl ="http://localhost:8080";
  

  constructor(private http:HttpClient) { }

  getTrainerList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+ '/trainer');
  }

  getTrainerById(val:any){
  return this.http.get<any>(this.APIUrl+'/trainer/trainerID', val)
  }
  

  addTrainer(val:any){
    return this.http.post(this.APIUrl+ '/trainer', val)
  }

  updateTrainer(val:any){
    return this.http.put(this.APIUrl + '/trainer/'+ val , this.getTrainerById)
  }

  deleteTrainer(val:any){
    return this.http.delete(this.APIUrl+'/trainer/'+ val)
  }



  getProgramList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+ '/program');
  }

  addProgram(val:any){
    return this.http.post(this.APIUrl+ '/program', val)
  }

  updateProgram(val:any){
    return this.http.put(this.APIUrl + '/program/', val)
  }

  deleteProgram(val:any){
    return this.http.delete(this.APIUrl+'/program/'+ val)
  }

 // getAllTrainers():Observable<any>{
   // return this.http.get<any[]>(this.APIUrl+'/trainer/getAllTrainers');
  //}
}
