import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { IProduct } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private cartService = inject(CartService);

  products = signal<IProduct[]>([]);
  cart = this.cartService.cart;

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts () {
    const items : IProduct[] = [];
    for (let index = 0; index < 8; index++) {
      const product : IProduct = {
        id: index,
        img: `https://picsum.photos/640/640?r=${index}`,
        title: `product-${index}`,
        price: index + 1,
        createdAt: new Date().toISOString()
      }

      items.push(product);
    }

    this.products.set(items);
  }

  addToCart (product: IProduct) {
    this.cartService.addToCart(product);
  }

}
