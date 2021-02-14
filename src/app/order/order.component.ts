import {Component, OnInit} from '@angular/core';
import {PaginationHelper} from "../_helpers/pagination.helper";
import {Order} from "../model/order";
import {OrderService} from "../_services/order.service";
import {GiftCertificate} from "../model/giftt-certificate";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];
  page: number = 1;
  pageSize: number = 20;
  totalPages: number;
  totalPagesArray: number[] = [];
  totalElements: number;
  first: boolean;
  last: boolean;

  constructor(private orderService: OrderService,
              private paginationHelper: PaginationHelper) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.findAll(this.page, this.pageSize).subscribe(response => {
      this.orders = Array.from(response.content)
      this.orders.filter((o) => {
        if (o.giftCertificateDTO == null) {
          o.giftCertificateDTO = new GiftCertificate();
        }
      })
      console.log(this.orders)
      this.page = response.number + 1;
      this.pageSize = response.pageSize;
      this.totalElements = response.totalElements;
      this.totalPages = response.totalPages;

      this.totalPagesArray = this.paginationHelper.getPaginationList(this.page, this.totalPages)
      console.log(this.totalPagesArray)
      this.first = response.first;
      this.last = response.last;
    });
  }

  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.page = i
    if (this.page <= 0) {
      this.page = 1;
    } else if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }
    this.pageSize = 20;
    this.orders = []
    this.getOrders();
  }

}
