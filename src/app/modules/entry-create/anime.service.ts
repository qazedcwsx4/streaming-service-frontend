import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Anime} from '../shared/anime.model';
import {Constants} from '../shared/Constants';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private static GET_ANIME_DATA_ENDPOINT = `${Constants.BACKEND_URL}/mal/getById`;
  private static ADD_ANIME_ENDPOINT = `${Constants.BACKEND_URL}/anime/add`;

  public fetchAnimeData(id: string): Observable<Anime> {
    return this.http.get<Anime>(AnimeService.GET_ANIME_DATA_ENDPOINT, {params: {malId: id}});
  }

  public createAnime(anime: Anime, files: Array<File>): Observable<any> {
    const formData = new FormData();

    for (const file of files) {
      console.log(file.name);
      formData.append('file', file, file.name);
    }
    formData.append('anime', JSON.stringify(anime));
    return this.http.post(AnimeService.ADD_ANIME_ENDPOINT, formData);
  }

  constructor(
    private http: HttpClient
  ) {
  }
}
