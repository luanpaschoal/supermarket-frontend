import {HeaderService} from './header.service';
import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../nav/sidenav.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService,
              private sidenavService: SidenavService) {
  }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }


}
