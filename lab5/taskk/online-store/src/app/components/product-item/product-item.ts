import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItem implements OnInit, OnChanges {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  currentImage = '';

  ngOnInit() {
    this.currentImage = this.product.image || this.product.images?.[0] || '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      this.currentImage = this.product.image || this.product.images?.[0] || '';
    }
  }

  selectImage(img: string) {
    this.currentImage = img;
  }

  like() {
    this.product.likes += 1;
  }

  onDelete() {
    this.delete.emit(this.product.id);
  }

  waShareLink(): string {
    return 'https://wa.me/?text=' + encodeURIComponent(`Check out this product: ${this.product.link}`);
  }

  tgShareLink(): string {
    return 'https://t.me/share/url?url=' + encodeURIComponent(this.product.link) +
           '&text=' + encodeURIComponent(this.product.name);
  }
}