import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TareaProgramadaServiceService {

  constructor(private http:HttpClient) { }

  public ListarTareasprogramadas(){
   return this.http.get("https://localhost:44336/api/calendariotareasprogramadas/listartareasprogramadas");    
}

}