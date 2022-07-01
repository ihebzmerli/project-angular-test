import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getPeoples(){
    return this.http.get<any>("http://localhost:3000/peoples/")
  }

  getPeoplesById(id : string){
    return this.http.get<any>(`http://localhost:3000/peoples/${id}`)
  }
}
