import {Component, Input, OnInit} from '@angular/core';

interface Entry{
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  constructor() { }

  entries: Array<Entry> = [];

  ngOnInit(): void {
    this.entries.push({title: 'a', description: 'b', imageUrl: 'c'});
    this.entries.push({title: 'a', description: 'b', imageUrl: 'c'});
  }

}
