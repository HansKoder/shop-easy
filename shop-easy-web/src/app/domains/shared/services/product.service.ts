import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getProducts (categoryId?: string) :Observable<IProduct[]> {
    const url: URL = new URL("http://localhost:8080/api/v1/products/");
    if (categoryId) url.searchParams.set('categoryId', categoryId);
    
    return this.http.get<IProduct[]>(url.toString());
  }

  getProduct (id: number) :Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:8080/api/v1/products/${id}`)
  }
}
