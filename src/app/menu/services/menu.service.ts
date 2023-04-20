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
    const url = `${environment.iutApiBaseUrl}/menu/fastfood/${fastFoodId}`;
    return this.http.get<Menu[]>(url);
  }
 
}
