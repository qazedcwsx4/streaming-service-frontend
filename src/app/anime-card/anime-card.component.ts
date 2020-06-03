import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css'],
})
export class AnimeCardComponent {

  constructor() { }

  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;

}
