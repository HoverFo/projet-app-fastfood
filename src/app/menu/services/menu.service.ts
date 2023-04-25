//Mon menu.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';
import { environment } from 'src/environments/environment.development';



@Injectable({providedIn: 'root'})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenusByFastFood(fastFoodId: number): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${environment.iutApiBaseUrl}/menu/fastfood/${fastFoodId}`);
  }
  
  

    delete(id: number): Observable<string>{
      return this.http.delete<string>(environment.iutApiBaseUrl+"/menu/"+id);
    }
  
    update(menu: Menu): Observable<string>{
      return this.http.put<string>(environment.iutApiBaseUrl+"/menu/"+menu.id, menu);
    }

  create(menu: Menu): Observable<string>{
    return this.http.post<string>(environment.iutApiBaseUrl+"/menu", menu);
  }

  getById(id: number): Observable<Menu>{
    return this.http.get<Menu>(environment.iutApiBaseUrl+"/menu/"+id)
  }

}
