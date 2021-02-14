import {Component, Injectable, OnInit} from '@angular/core';
import {AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService
  ) {
  }

  currentUser
  isLoggedIn

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.currentUserValue;
  }

}
