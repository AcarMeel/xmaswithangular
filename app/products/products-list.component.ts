import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    moduleId: module.id,
    selector: 'products',
    templateUrl: 'products-list.component.html',
    styleUrls: ['products-list.component.css']
})

export class ProductsListComponent implements OnInit {
    pageTitle: string = 'XMAS Gifts List';
    showImage: boolean = true;
    filter: string = "xmas";
    products: IProduct[];
    errorMessage: string;

    toggleImg(): void {
        this.showImage = !this.showImage;
    }

    constructor(private _productService: ProductService) {

    }

    ngOnInit() {
     this._productService.getProducts()
     .subscribe(products => this.products = products, error => this.errorMessage = <any> error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = message;
    }
}