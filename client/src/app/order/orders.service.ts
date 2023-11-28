import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../shared/models/Order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<Order[]>(this.baseUrl + 'orders');
  }

  getOrderById(id: number) {
    return this.http.get<Order>(this.baseUrl + 'orders/' + id);
  }
}
