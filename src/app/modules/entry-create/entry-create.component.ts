import {Component, OnInit} from '@angular/core';
import {Anime} from '../shared/anime.model';
import {AnimeService} from './anime.service';

@Component({
  selector: 'app-entry-create',
  templateUrl: './entry-create.component.html',
  styleUrls: ['./entry-create.component.scss']
})
export class EntryCreateComponent implements OnInit {

  anime = new Anime();
  files = new Array<File>();

  animeFetchedHandler(anime: Anime) {
    this.anime = anime;
  }

  filesPickedHandler(files: Array<File>) {
    console.log('picked');
    this.files = files;
  }

  onFormSubmitted(): void{
    console.log(this.files);
    this.animeService.createAnime(this.anime, this.files).subscribe();
  }

  constructor(
    private animeService: AnimeService
  ) {
  }

  ngOnInit(): void {
  }

}
