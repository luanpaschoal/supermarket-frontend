import {Item} from "../item.interface";
import {Router, ActivatedRoute} from "@angular/router";
import {ItemService} from "../item.service";
import {Component, OnInit} from "@angular/core";
import {ItemModel} from "../item.model";

@Component({
  selector: "app-item-form",
  templateUrl: "./item-form.component.html",
  styleUrls: ["./item-form.component.scss"],
})
export class ItemFormComponent implements OnInit {
  title: string = "Novo Item";
  operationMode: String;
  item: Item;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.item = new ItemModel();
    this.operationMode = this.route.snapshot.params['state'];
    const id = +this.route.snapshot.params['id'];

    if (this.operationMode == 'update') {
      this.title = "Alterar Item";
      this.getById(id);
    }
  }

  getById(id: number) {
    this.itemService.readById(id).subscribe((item) => {
      this.item = item;
    });
  }

  saveItem(): void {
    console.log(this.operationMode);
    if (this.operationMode == "create") {
      this.createItem();
    } else if (this.operationMode == "update") {
      this.updateItem();
    }
  }

  private createItem(): void {
    this.itemService.create(this.item).subscribe(() => {
      this.itemService.showMessage('Item criado com sucesso!')
      this.router.navigate(['/items'])
    })
  }

  private updateItem(): void {
    this.itemService.update(this.item).subscribe(() => {
      this.itemService.showMessage('Item atualizado com sucesso!')
      this.router.navigate(['/items'])
    })
  }

  cancel(): void {
    this.router.navigate(["/items"]);
  }
}
