import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GiftCertificate} from "../model/giftt-certificate";
import {ListResult} from "../model/list-result";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  certificateUrl: string;

  constructor(private http: HttpClient) {
    this.certificateUrl = environment.apiUrl + '/certificates';
  }

  public findAll(page?:number, pageSize?: number): Observable<ListResult> {
    return this.http.get<ListResult>(this.certificateUrl + '?' + 'page=' + page + '&page_size=' + pageSize);
  }

  public addCertificate(certificate: GiftCertificate): Observable<GiftCertificate> {
    return this.http.post<GiftCertificate>(this.certificateUrl, certificate);
  }

  public findById(id: number): Observable<GiftCertificate> {
    let certificateIdUrl = this.certificateUrl + '/' + id;
    return this.http.get<GiftCertificate>(certificateIdUrl);
  }
}
