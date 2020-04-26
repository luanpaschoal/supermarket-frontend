import {Item} from "./item.interface";

export class ItemModel implements Item{
    id?: number
    name: string
    price: number
}
