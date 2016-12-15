import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); 

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 90/5;
    }
}