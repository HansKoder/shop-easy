import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  private cartService = inject(CartService);

  hideSideMenu = signal<boolean>(true);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu () {
    this.hideSideMenu.update((prev) => !prev);
  }



}
