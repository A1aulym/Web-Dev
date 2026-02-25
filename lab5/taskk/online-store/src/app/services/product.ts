import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
  // ===== Category 1: Smartphones (id=1) =====
  {
    id: 1, categoryId: 1, likes: 0,
    name: 'Apple iPhone 15',
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею.',
    price: 407148, rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
  },
  {
    id: 2, categoryId: 1, likes: 0,
    name: 'Samsung Galaxy S24',
    description: 'Флагман Samsung с ярким экраном и быстрым интерфейсом. Отличный выбор для игр и соцсетей.',
    price: 334976, rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf9/p5d/1305599.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pa9/p13/1305602.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p55/p13/1305605.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p00/p13/1305608.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-goluboi-128142966/?c=750000000'
  },
  {
    id: 3, categoryId: 1, likes: 0,
    name: 'Xiaomi Redmi Note 13 Pro+',
    description: 'Доступный смартфон с хорошим экраном и батареей. Отличный вариант на каждый день.',
    price: 187150, rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p5b/pdd/15562936.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3f/pdd/15562937.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p07/pdd/15562939.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000'
  },
  {
    id: 4, categoryId: 1, likes: 0,
    name: 'OPPO Reno 8T',
    description: 'OPPO Reno 8T 5G — это стильный и мощный смартфон с передовыми технологиями.',
    price: 127258, rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h94/81315506192414.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pf1/pa7/64340689.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p85/pa5/64340690.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p4c/pa5/64340692.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/oppo-reno-8t-5g-8-gb-256-gb-chernyi-110902037/?c=750000000'
  },
  {
    id: 5, categoryId: 1, likes: 0,
    name: 'Realme Note 70 ',
    description: 'Это воплощение инноваций и стиля, предлагающее безупречную производительность.',
    price: 66990, rating: 4.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p91/p92/64499417.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p75/p92/64499418.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p60/p8f/64499425.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pf0/p3b/96433956.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/realme-note-70-4-gb-128-gb-zolotistyi-145564483/?c=750000000'
  },

  // ===== Category 2: Laptops (id=2) =====
  {
    id: 6, categoryId: 2, likes: 0,
    name: 'Lenovo IdeaPad Slim',
    description: 'Ноутбук для учебы и работы. Хороший баланс производительности и цены.',
    price: 479990, rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pcb/p7f/84525051.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pe7/p7f/84525052.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p20/p80/84525054.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3c/p80/84525055.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-5-14-32-gb-ssd-1024-gb-bez-os-83j0001brk-151554553/?c=750000000'
  },
  {
    id: 7, categoryId: 2, likes: 0,
    name: 'Apple MacBook Pro 16',
    description: 'Apple MacBook Pro 16 — мощный ноутбук, созданный для профессионалов и творческих людей.',
    price: 699990, rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pdd/p7c/36863342.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pf9/p7c/36863343.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p31/p7d/36863345.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000'
  },
  {
    id: 8, categoryId: 2, likes: 0,
    name: 'ASUS Vivobook 15',
    description: 'ASUS Vivobook 15 (X1504) – мощный, универсальный, инновационный ноутбук с отличными характеристиками.',
    price: 398997, rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h98/85775243247646.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h89/h93/85775243313182.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he5/h06/85775243378718.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb0/h98/85775243509790.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-24-gb-ssd-1000-gb-win-11-pro-x1504za-bq1105zw-90nb1022-mzw1m0-118395132/?c=750000000'
  },
  {
    id: 9, categoryId: 2, likes: 0,
    name: 'Acer Gadget E10 ETBook',
    description: 'Acer Gadget E10 ETBook — ваш идеальный спутник для работы и развлечений!',
    price: 283900, rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h68/86642069504030.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/h79/86642069569566.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd6/hf9/86642069635102.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/h53/86642069962782.jpg?format=gallery-medium3'
    ],
    link: 'https://kaspi.kz/shop/p/acer-gadget-e10-etbook-14-16-gb-ssd-512-gb-win-11-home-0167563995-121895857/?c=750000000'
  },
  {
    id: 10, categoryId: 2, likes: 0,
    name: 'HP 15-fc0077ci ',
    description: 'HP 15-fc0077ci — идеальный выбор для работы и учебы. Смощным процессором AMD Ryzen 3.',
    price: 247568, rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p6b/12811674.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p2c/p6b/12811676.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pf4/p6a/12811678.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pfb/p67/12811684.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/hp-15-fc0077ci-15-6-8-gb-ssd-512-gb-bez-os-b4lk7ea-131318056/?c=750000000'
  },

  // ===== Category 3: Headphones (id=3) =====
  {
    id: 11, categoryId: 3, likes: 0,
    name: 'AirPods Pro 2',
    description: 'Беспроводные наушники с шумоподавлением. Отлично подходят для музыки и звонков.',
    price: 102878, rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
  },
  {
    id: 12, categoryId: 3, likes: 0,
    name: 'JBL Tune 510BT',
    description: 'JBL Tune 510BT позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов.',
    price: 13532, rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/h17/86453058535454.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h3c/hdd/86453058568222.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3d/h10/63917315784734.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd0/hae/63917318012958.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-rozovyi-101407423/?c=750000000'
  },
  {
    id: 13, categoryId: 3, likes: 0,
    name: 'Samsung Galaxy Buds3',
    description: 'Samsung Galaxy Buds 3 — беспроводные наушники-вкладыши с комфортной посадкой.',
    price: 47476, rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h8a/86487901962270.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf8/hbd/86487902027806.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf4/h1a/86487902093342.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hec/h73/86487902158878.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds3-serebristyi-121198899/?c=750000000'
  },
  {
    id: 14, categoryId: 3, likes: 0,
    name: 'Xiaomi Redmi Buds 6 Play',
    description: 'Эквалайзер: 5 предустановленных режимов через приложение Xiaomi Earbuds',
    price: 5370, rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p70/pb9/107072579.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pdc/pbb/107072580.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pf8/pbb/107072581.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p14/pbc/107072582.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-6-play-belyi-123229673/?c=750000000'
  },
  {
    id: 15, categoryId: 3, likes: 0,
    name: 'GERLAX GH-39',
    description: 'Наушники с лучшим шумоподавлением. Комфортные и с качественным звуком.',
    price: 8500, rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/hef/86037657616414.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hff/hc3/86037657681950.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h1a/ha5/86037657747486.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h26/hef/86037657616414.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-gerlax-gh-39-zelenyi-119492208/?c=750000000'
  },

  // ===== Category 4: Tablets (id=4) =====
  {
    id: 16, categoryId: 4, likes: 0,
    name: 'Apple iPad A16 11',
    description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений!',
    price: 200072, rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pb7/p12/37019481.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p7e/p12/37019483.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-sinii-138202165/?c=750000000'
  },
  {
    id: 17, categoryId: 4, likes: 0,
    name: 'AIRSTAR G3000 pluse',
    description: 'Представляем планшет AIRSTAR G3000 pluse который станет вашим идеальным спутником для работы и развлечений.',
    price: 38999, rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pbc/peb/3848531.jpeg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p52/pe8/3848532.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe8/pe4/3848533.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p7e/pe1/3848534.jpeg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/airstar-g3000-pluse-10-1-djuim-16-gb-512-gb-chernyi-128606600/?c=750000000'
  },
  {
    id: 18, categoryId: 4, likes: 0,
    name: 'Huawei MatePad SE AGS6-W09',
    description: 'Представляем планшет Huawei MatePad SE AGS6-W09 — мощный и удобный помощник для работы и развлечений.',
    price: 73329, rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h26/hdf/86746842660894.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf8/hb7/86746842726430.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6a/hfc/86746842923038.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000'
  },
  {
    id: 19, categoryId: 4, likes: 0,
    name: 'Apple iPad Air 11',
    description: 'Apple iPad Air 11 - это продукт, который приносит вам самые передовые технологии и дизайн от компании Apple. ',
    price: 325362, rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pbd/p8c/36122455.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p53/p89/36122456.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000'
  },
  {
    id: 20, categoryId: 4, likes: 0,
    name: 'Samsung Galaxy Tab A11',
    description: 'Представляем планшет Samsung Galaxy Tab A11 — мощный и удобный помощник для работы и развлечений.',
    price: 95782, rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pfb/p36/69034336.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p17/p37/69034337.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p33/p37/69034338.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p4f/p37/69034339.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a11-8-7-djuim-8-gb-128-gb-seryi-146913692/?c=750000000'
  }
];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products
      .filter(p => p.categoryId === categoryId)
      .map(p => ({ ...p, images: [...p.images] }));
  }
}