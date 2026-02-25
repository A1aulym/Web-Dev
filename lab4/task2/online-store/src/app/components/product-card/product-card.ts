
import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  product = input.required<Product>();

  waShareLink(): string {
    return 'https://wa.me/?text=' + encodeURIComponent(`Check out this product: ${this.product().link}`);
  }

  tgShareLink(): string {
    const p = this.product();
    return 'https://t.me/share/url?url=' + encodeURIComponent(p.link) +
           '&text=' + encodeURIComponent(p.name);
  }

  getStars(): boolean[] {
    const full = Math.floor(this.product().rating ?? 0);
    return Array.from({ length: 1 }, (_, i) => i < full);
  }
}