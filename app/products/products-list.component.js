"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('./product.service');
var ProductsListComponent = (function () {
    function ProductsListComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = 'XMAS Gifts List';
        this.showImage = true;
        this.filter = "xmas";
    }
    ProductsListComponent.prototype.toggleImg = function () {
        this.showImage = !this.showImage;
    };
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductsListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = message;
    };
    ProductsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'products',
            templateUrl: 'products-list.component.html',
            styleUrls: ['products-list.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=products-list.component.js.map