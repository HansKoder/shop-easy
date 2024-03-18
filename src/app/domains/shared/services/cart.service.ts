import { Injectable, computed, signal } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart = signal<IProduct[]> ([]);
  total = computed(()=> {
    const cart = this.cart();
    return cart.reduce((prev, current) => prev + current.price, 0);
  });

  addToCart (product: IProduct) {
    this.cart.update((prevState => [...prevState, product]))
  }
}
