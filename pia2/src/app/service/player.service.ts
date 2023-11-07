/*import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
  musicaAtual = new BehaviorSubject<IMusica>(newMusica());
  timerId: any = null;

  constructor(private spotifyService: SpotifyService) { 
    this.obterMusicaAtual();
  }

  async obterMusicaAtual(){
    clearTimeout(this.timerId);

    // Obtener  musica
    const musica = await this.spotifyService.obterMusicaAtual();
    this.definirMusicaAtual(musica);

    //  loop
    this.timerId = setInterval(async () => {
      await this.obterMusicaAtual();
    }, 5000)
  }

  definirMusicaAtual(musica: IMusica){
    this.musicaAtual.next(musica);
  }

  async voltarMusica(){
    await this.spotifyService.voltarMusica();
  }

  async proximaMusica() {
    await this.spotifyService.proximaMusica();
  }
}*/
