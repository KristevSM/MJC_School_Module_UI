import {Component, OnInit} from '@angular/core';
import {GiftCertificate} from "../model/giftt-certificate";
import {CertificateService} from "../_services/certificate.service";
import {map} from "rxjs/operators";
import {PaginationHelper} from "../_helpers/pagination.helper";

@Component({
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.scss']
})
export class CertificatesListComponent implements OnInit {

  certificates: GiftCertificate[] = [];
  page: number = 1;
  pageSize: number = 20;
  totalPages: number;
  totalPagesArray: number[] = [];
  totalElements: number;
  first: boolean;
  last: boolean;

  constructor(private certificateService: CertificateService,
              private paginationHelper: PaginationHelper) {
  }

  ngOnInit() {
    this.getCertificates();
  }

  getCertificates() {
    this.certificateService.findAll(this.page, this.pageSize).subscribe(response => {
      this.certificates = Array.from(response.content)
      this.page = response.number + 1;
      this.pageSize = response.pageSize;
      this.totalElements = response.totalElements;
      this.totalPages = response.totalPages;

      this.totalPagesArray = this.paginationHelper.getPaginationList(this.page, this.totalPages)
      this.first = response.first;
      this.last = response.last;
    });
  }

  setPage(i, event: any) {
    event.preventDefault();
    this.page = i
    if (this.page <= 0) {
      this.page = 1;
    } else if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }
    this.pageSize = 20;
    this.certificates = []
    this.getCertificates();
  }
}
