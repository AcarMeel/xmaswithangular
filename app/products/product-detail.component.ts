import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { IProduct } from './product';

@Component({
    moduleId: module.id,
    selector: 'product-detail',
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';

    product: IProduct[];
}