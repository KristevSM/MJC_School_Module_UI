import {Injectable, OnInit} from '@angular/core';
import {log} from "util";


@Injectable({ providedIn: 'root' })
export class PaginationHelper implements OnInit{
  private startPage:number = 1;
  private lastPage:number = 2;
  private currentPage:number = 1;
  totalPagesArray: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getPaginationList(page:number, totalPages:number): number[] {
    this.totalPagesArray = []
    this.currentPage = page;

    if (page > 5 && totalPages > (page + 5)) {
      this.startPage = this.currentPage - 5;
      this.lastPage = this.currentPage + 5;
    } else if (page > 5 && totalPages <= (page + 5)) {
      this.startPage = this.currentPage - 5;
      this.lastPage = totalPages;
    } else if (page <=5 && totalPages <= (page + 5)) {
      this.startPage = this.currentPage - (this.currentPage-1);
      this.lastPage = totalPages;
    } else if (page <=5 && totalPages > (page + 5)) {
      this.startPage = this.currentPage - (this.currentPage-1);
      this.lastPage = page + 5;
    }

    console.log('Page: ' + page)
    console.log('Total Page: ' + totalPages)
    console.log('First Page: ' + this.startPage)
    console.log('Last Page: ' + this.lastPage)

      for (let i = this.startPage; i < this.lastPage; i++) {
        this.totalPagesArray.push(i)
      }


    return this.totalPagesArray;
  }

}
