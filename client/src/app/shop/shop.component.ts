import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];
  brandIdSelected = 0;
  typeIdSelected = 0;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getTypes();
    this.getProducts();
  }

  getProducts() {
    this.shopService.getProducts(this.brandIdSelected, this.typeIdSelected).subscribe({
      next: response => this.products = response.data,
      error: err => console.log(err)
    });
  }

  getBrands() {
    this.shopService.getBrands().subscribe({
      next: response => this.brands = [{ id: 0, name: 'All' }, ...response],
      error: err => console.log(err)
    });
  }

  getTypes() {
    this.shopService.getTypes().subscribe({
      next: response => this.types = [{ id: 0, name: 'All' }, ...response],
      error: err => console.log(err)
    });
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }
  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }

}
