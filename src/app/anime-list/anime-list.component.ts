import {Component, Input, OnInit} from '@angular/core';

interface Entry{
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  constructor() { }

  entries: Array<Entry> = [];

  ngOnInit(): void {
    this.entries.push({title: 'a', description: 'b', imageUrl: 'c'});
    this.entries.push({title: 'a', description: 'b', imageUrl: 'c'});
  }

}
