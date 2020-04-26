import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {HeaderService} from "../template/header/header.service";

@Component({
  selector: 'app-buylist-crud',
  templateUrl: './buylist-crud.component.html',
  styleUrls: ['./buylist-crud.component.scss']
})
export class BuylistCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Lista de compras',
      icon: 'storefront',
      routeUrl: '/items'
    }
  }

  ngOnInit(): void {
  }

  navigateToItemCreate(): void {
    this.router.navigate(['/items/create'])
  }

}
