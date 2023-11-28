import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss'],
})
export class OrderDetailedComponent implements OnInit {
  order: Order | null = null;
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    setTimeout(() => {
      const id = Number(window.location.pathname.split('/')[2]);
      this.getOrderById(id);
    }, 1000);
  }

  getOrderById(id: number) {
    this.ordersService.getOrderById(id).subscribe({
      next: (response) => {
        console.log(response);
        this.order = response;
      },
      error: (err) => console.log(err),
    });
  }
}
