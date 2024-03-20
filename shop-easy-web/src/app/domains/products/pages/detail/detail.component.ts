import { CartService } from './../../../shared/services/cart.service';
import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { IProduct } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  productService = inject(ProductService);
  cartService = inject(CartService);

  @Input() id!: string;

  product = signal<IProduct | undefined>(undefined);
  cover = signal<string | undefined>("")

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct () {
      this.productService.getProduct(Number(this.id)).subscribe({
        next: (data) => { 
          this.product.set(data) 
          if (this.product()?.images && this.product()?.images[0]) {
            this.cover.set(this.product()?.images[0]);
          }
        },error: (err) => { console.log(`cannot get product ${err}`);
         }
      })
  }

  addToCart () {
    this.cartService.addToCart(this.product as any);
  }

  changeCover (img : string | undefined) {
    this.cover.set(img);
  }

}
