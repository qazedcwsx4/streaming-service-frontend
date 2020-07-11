import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Anime} from '../../shared/anime.model';
import {AnimeService} from '../anime.service';

@Component({
  selector: 'app-mal-downloader',
  templateUrl: './mal-downloader.component.html',
  styleUrls: ['./mal-downloader.component.scss']
})
export class MalDownloaderComponent implements OnInit {

  @Input() readonly anime: Anime;

  @Output() animeFetchedEvent = new EventEmitter<Anime>();

  malId: string;

  fetchAnime(id: string) {
    this.animeService.fetchAnimeData(id)
      .subscribe(it => this.animeFetchedEvent.emit(it));
  }

  constructor(
    private animeService: AnimeService
  ) {
  }

  ngOnInit(): void {
  }

}
