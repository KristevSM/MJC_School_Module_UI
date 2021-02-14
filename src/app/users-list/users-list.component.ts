import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../_services/user.service";
import {PaginationHelper} from "../_helpers/pagination.helper";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  page: number = 1;
  pageSize: number = 20;
  totalPages: number;
  totalPagesArray: number[] = [];
  totalElements: number;
  first: boolean;
  last: boolean;

  constructor(private userService: UserService,
              private paginationHelper: PaginationHelper) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.findAll(this.page, this.pageSize).subscribe(response => {
      this.users = Array.from(response.content)
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
    this.users = []
    this.getUsers();
  }

}
