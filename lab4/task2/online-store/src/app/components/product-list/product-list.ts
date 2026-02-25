import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  products: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 15',
    description: 'Смартфон Apple с мощным процессором и отличной камерой. Подходит для фото, видео и работы каждый день.',
    price: 499990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    description: 'Флагман Samsung с ярким экраном и быстрым интерфейсом. Отличный выбор для игр и соцсетей.',
    price: 459990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf9/p5d/1305599.png?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pe2/p13/1305600.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pa9/p13/1305602.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p8d/p13/1305603.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-goluboi-128142966/?c=750000000'
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    description: 'Беспроводные наушники с шумоподавлением. Отлично подходят для музыки и звонков.',
    price: 129990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
  },
  {
    id: 4,
    name: 'Apple Watch Series 9',
    description: 'Умные часы для спорта и здоровья. Уведомления, тренировки и измерения.',
    price: 219990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h30/h30/83874225586206.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h91/hae/83874225651742.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h77/hcd/83874225717278.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h30/h30/83874225586206.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-rozovyi-113398459/?c=750000000'
  },
  {
    id: 5,
    name: 'Xiaomi Redmi Note 13',
    description: 'Доступный смартфон с хорошим экраном и батареей. Отличный вариант на каждый день.',
    price: 99990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p5b/pdd/15562936.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3f/pdd/15562937.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p23/pdd/15562938.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000'
  },
  {
    id: 6,
    name: 'Logitech MX Master 3S',
    description: 'Удобная мышь для работы и учебы. Тихие клики и точный сенсор.',
    price: 59990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h99/87277624328222.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf5/h45/87277624360990.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8e/hc2/87277624393758.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9b/h20/87277624426526.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006560-belyi-106172406/?c=750000000'
  },
  {
    id: 7,
    name: 'Sony WH-1000XM5',
    description: 'Наушники с лучшим шумоподавлением. Комфортные и с качественным звуком.',
    price: 179990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p92/pb6/43642143.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p75/pb6/43642144.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p59/pb6/43642145.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3d/pb6/43642146.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm6-sinii-140045251/?c=750000000'
  },
  {
    id: 8,
    name: 'JBL Charge 5',
    description: 'Портативная колонка с мощным басом. Подходит для дома и улицы.',
    price: 79990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/hd1/64170070769694.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h8e/h6c/64170073718814.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5f/hac/64170076799006.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he4/h39/64170079453214.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-jbl-charge-5-krasnyi-101870529/?c=750000000'
  },
  {
    id: 9,
    name: 'Samsung 55" Smart TV',
    description: 'Большой телевизор для фильмов и сериалов. Smart TV и удобные приложения.',
    price: 299990,
    rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pe9/p8b/64279726.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p21/p8c/64279728.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pc6/p8e/64279731.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pfe/p8e/64279733.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-qe55q7faauxce-140-sm-chernyi-145494890/?c=750000000'
  },
  {
    id: 10,
    name: 'Lenovo IdeaPad 5',
    description: 'Ноутбук для учебы и работы. Хороший баланс производительности и цены.',
    price: 349990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p1b/p9e/59741111.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pe7/p7f/84525052.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p58/p80/84525056.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p90/p80/84525058.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-5-14-32-gb-ssd-1024-gb-bez-os-83j0001brk-151554553/?c=750000000'
  }
];
}