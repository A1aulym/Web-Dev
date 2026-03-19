import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnChanges {
  @Input() products: Product[] = [];
  list: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    // делаем локальную копию, чтобы удаление работало без сервиса
    this.list = this.products.map(p => ({ ...p, images: [...p.images] }));
  }

  removeProduct(id: number) {
    this.list = this.list.filter(p => p.id !== id);
  }
}