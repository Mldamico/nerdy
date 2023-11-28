import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private ordersService: OrdersService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.getOrders();
    }, 1000);
  }

  getOrders() {
    this.ordersService.getOrders().subscribe({
      next: (response) => {
        console.log(response);
        this.orders = response;
      },
      error: (err) => console.log(err),
    });
  }
}
