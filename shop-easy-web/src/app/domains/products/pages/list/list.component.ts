import { CommonModule } from '@angular/common';
import { Component, inject, signal, Input, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '@products/components/product/product.component';
import { ICategory, IProduct } from '@shared/models/product.model';
import { CartService } from "@shared/services/cart.service";
import { CategoryService } from '@shared/services/category.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  @Input() categoryId! : string;

  products = signal<IProduct[]>([]);
  categories = signal<ICategory[]>([]);
  cart = this.cartService.cart;

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getProducts();
  }

  getProducts () {
    this.productService
    .getProducts(this.categoryId)
    .subscribe({
      next: (result) => {
        this.products.set(result);
      },
      error: (err) => {
        console.log(`error cannot fetch products ${err}`);
      }
    });
  }

  getCategories () {
    this.categoryService
    .getCategories()
    .subscribe({
      next: (result) => {
        this.categories.set(result)
      },
      error: (err) => {
        console.log(`error cannot fetch categories ${err}`);
      }
    });
  }

  addToCart (product: IProduct) {
    this.cartService.addToCart(product);
  }

}
