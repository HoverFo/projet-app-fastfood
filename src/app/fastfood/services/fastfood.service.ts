import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fastfood } from '../models/fastfood';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class FastfoodService {

  constructor(private http: HttpClient) { }
get() : Observable<Fastfood[]>{
  return this.http.get<Fastfood[]>(environment.iutApiBaseUrl+"/fastfood");
}

getFastfoodById(fastfoodId: number): Observable<Fastfood> {
  const url = `${environment.iutApiBaseUrl}/fastfood/${fastfoodId}`;
  return this.http.get<Fastfood>(url);
}
}
