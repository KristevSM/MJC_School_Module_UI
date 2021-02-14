import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ListResult} from "../model/list-result";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string;

  constructor(private http: HttpClient) {
    this.userURL = environment.apiUrl + '/users';
  }

  public findAll(page?:number, pageSize?: number): Observable<ListResult> {
    console.log("Find all: ", page)
    console.log(this.http.get<ListResult>(this.userURL + '/?' + 'page=' + page + '&page_size=' + pageSize));
    return this.http.get<ListResult>(this.userURL + '?' + 'page=' + page + '&page_size=' + pageSize);
  }

}
