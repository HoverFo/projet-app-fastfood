import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fastfood } from '../models/fastfood';
import { environment } from 'src/environments/environment.development';

@Injectable({providedIn: 'root'})
export class FastfoodService {

  constructor(private http: HttpClient) { }
get() : Observable<Fastfood[]>{
  return this.http.get<Fastfood[]>(environment.iutApiBaseUrl+"/fastfood");
}

getFastfoodById(fastfoodId: number): Observable<Fastfood> {
  const url = `${environment.iutApiBaseUrl}/fastfood/${fastfoodId}`;
  return this.http.get<Fastfood>(url);
}

create(fastfood: Fastfood): Observable<string>{
  return this.http.post<string>(environment.iutApiBaseUrl+"/fastfood", fastfood);
}

delete(id: number): Observable<string>{
  return this.http.delete<string>(environment.iutApiBaseUrl+"/fastfood/"+id);
}

update(fastfood: Fastfood): Observable<string>{
  return this.http.put<string>(environment.iutApiBaseUrl+"/fastfood/"+fastfood.id, fastfood);
}
}
