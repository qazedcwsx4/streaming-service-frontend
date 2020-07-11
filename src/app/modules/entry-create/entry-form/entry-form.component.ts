import {Component, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Anime} from '../../shared/anime.model';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent implements OnInit {

  @Input() anime: Anime;

  constructor() { }

  ngOnInit(): void {
  }
}
