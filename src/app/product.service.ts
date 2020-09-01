import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

   products = [
    { id: 'yfc6b27f-9cdc-4de7-b179-834948e3f8fc', name: 'i-phoneX', rate: '$45', quality: 2},
    { id: 'ffc6fh7f-9cdc-4de7-b179-834948e3f8fc', name: 'Samsung', rate: '$57', quality: 3},
    { id: 'ttcjb27f-9cdc-4de7-b179-3f8948e3f8fc', name: 'Nokia-10', rate: '$65', quality: 2},
    { id: 'ffbuh87f-9cdc-4de7-b179-834948e3f8fc', name: 'Microsoft-x', rate: '$66', quality: 1},
    { id: 'vfc6b27f-9cdc-4de7-b179-834948e3f8fc', name: 'One-Plus-8', rate: '$34', quality: 3},
    { id: 'ffc6bubf-9cdc-4de7-b179-834948e3f8fc', name: 'Sony Gen', rate: '$3', quality: 2},
    { id: 'sfc6b27f-9cdc-4de7-b179-834948e3f8fc', name: 'Dynama', rate: '$55', quality: 1},
    { id: 'fnk6b27f-9cdc-4de7-b179-494848e3f8fc', name: 'Gelexy-1', rate: '$46', quality: 2},
    { id: 'dfc6b27f-9cdc-4de7-b179-834948e3f8fc', name: 'Note-tune', rate: '$67', quality: 1},
    { id: 'kfc6b27f-9cdc-4de7-b179-834948e3f8fc', name: 'Tornado', rate: '$68', quality: 3}
  ];

  getProducts() : Product[]{
    return this.products;
  }
}
