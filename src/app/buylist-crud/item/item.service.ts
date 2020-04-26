import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Item} from "./item.interface";
import {Observable, EMPTY} from "rxjs";
import {map, catchError} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  baseUrl = environment.apiUrlItems;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(filter: string): Observable<Item[]> {
    let params = new HttpParams();

    if (filter)
      params = params.set('q', filter);

    return this.http.get<Item[]>(this.baseUrl, { params: params }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Item> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(item: Item): Observable<Item> {
    const url = `${this.baseUrl}/${item.id}`;
    return this.http.put<Item>(url, item).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Item> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Item>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
