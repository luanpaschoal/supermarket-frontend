import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemService} from '../item.service';
import {Item} from '../item.interface';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialog} from "../../../utils/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.scss']
})
export class ItemReadComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price', 'action']
  dataSource: MatTableDataSource<Item>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  filter: string;

  constructor(private itemService: ItemService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.itemService.read(this.filter).subscribe(items => {
      this.dataSource = new MatTableDataSource<Item>(items);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  openDeleteDialog(item: Item) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        message: `Tem certeza que deseja deletar o item: ${item.name}?`,
        buttonText: {
          ok: 'Sim',
          cancel: 'Não'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deleteItem(item.id);
      }
    });
  }

  deleteItem(itemId: number): void {
    this.itemService.delete(itemId).subscribe(() => {
      this.itemService.showMessage("Item excluído com sucesso!");
      this.loadItems();
    });
  }
}
