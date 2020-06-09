import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.css'],
})
export class EntryCardComponent {

  constructor() { }

  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;

}
