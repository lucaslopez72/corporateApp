import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  async getProducts(): Promise<any[]> {
    const response = await fetch('/assets/data/products.json');
    return await response.json();
  }
}