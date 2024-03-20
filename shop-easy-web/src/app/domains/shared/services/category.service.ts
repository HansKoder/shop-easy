import { Injectable, inject } from '@angular/core';
import { ICategory } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  constructor() { }

  getCategories () :Observable<ICategory[]> {
    return this.http.get<ICategory[]>("http://localhost:8080/api/v1/categories/")
  }

  getCategory (id: number) :Observable<ICategory> {
    return this.http.get<ICategory>(`http://localhost:8080/api/v1/categories/${id}`)
  }
}
