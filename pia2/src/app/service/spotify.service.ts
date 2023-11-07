import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { Musica } from '../model/musica';
import { Artista } from '../model/artista';
import { Playlist } from '../model/playlist';
import { SpotifyConfiguration } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  //spotifyApi: Spotify.SpotifyWebApiJs = null;
  //usuario!: User;

  constructor(
    private router: Router,
    private http: HttpClient) {
    //this.spotifyApi = new Spotify();
  }

  /*async inicializarUsuario() {
    if(!!this.usuario)
      return true;

    const token = localStorage.getItem('token');

    if(!token)
      return false;

    try {

      this.definirAccessToken(token);
      await this.obterSpotifyUsuario();
      return !!this.usuario;

    }catch(ex){
      return false;
    }
  }

  async obterSpotifyUsuario() {
    const userInfo = await this.spotifyApi.getMe();
    this.usuario = SpotifyUserParaUsuario(userInfo);
  }

  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType; 
  }

  obterTokenUrlCallback() {
    if (!window.location.hash)
      return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  definirAccessToken(token: string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

  async buscarPlaylistUsuario(offset = 0, limit = 50): Promise<Playlist[]>{
    // console.log('USUARIO', this.usuario);
    const playlists = await this.spotifyApi.getUserPlaylists(this.usuario.id, { offset, limit });
    return playlists.items.map(SpotifyPlaylistParaPlaylist);
  }

  async buscarMusicasPlaylist(playlistId: string, offset = 0, limit = 50){
    const playlistSpotify = await this.spotifyApi.getPlaylist(playlistId);

    if (!playlistSpotify)
      return null;
    
    const playlist = SpotifySinglePlaylistParaPlaylist(playlistSpotify);

    const musicasSpotify = await this.spotifyApi.getPlaylistTracks(playlistId, { offset, limit });
    playlist.musicas = musicasSpotify.items.map(musica => SpotifyTrackParaMusica(musica.track as SpotifyApi.TrackObjectFull))
    
    return playlist;
  }



  async buscarTopArtistas(limit = 10):Promise<Artista[]> {
    const artistas = await this.spotifyApi.getMyTopArtists({ limit });
    return artistas.items.map(SpotifyArtistaParaArtista);
  }

  async buscarMusicas(offset=0, limit=50): Promise<Musica[]>{
    const musicas = await this.spotifyApi.getMySavedTracks({ offset, limit });
    return musicas.items.map(x => SpotifyTrackParaMusica(x.track));
  }

  async executarMusica(musicaId: string){
    await this.spotifyApi.queue(musicaId);
    await this.spotifyApi.skipToNext();
  }

  async obterMusicaAtual(): Promise<Musica>{
    const musicaSpotify = await this.spotifyApi.getMyCurrentPlayingTrack();
    return SpotifyTrackParaMusica(musicaSpotify.item);
  }

  async voltarMusica(){
    await this.spotifyApi.skipToPrevious();
  }

  async proximaMusica() {
    await this.spotifyApi.skipToNext();
  }

 /* logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }*/
  getNewReleases() /*: Observable<NewRelease[]> */{ 

    const headers= new HttpHeaders({
      'Authorization':'Bearer BQD5A9nIK2is662cPILuDMGnW23DASb29KNxp579NLEbtiVKWdLkr_OGLGXBKDDiDC8b34BKPyckfvyDgR8RYmemr4-OIEhL2O36e8I0nO2Wyk64ldY'
    });

   return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=US&offset=0&limit=6',{headers});
          
    
  }

  getNewReleasesEs() /*: Observable<NewRelease[]> */{ 

    const headers= new HttpHeaders({
      'Authorization':'Bearer BQD5A9nIK2is662cPILuDMGnW23DASb29KNxp579NLEbtiVKWdLkr_OGLGXBKDDiDC8b34BKPyckfvyDgR8RYmemr4-OIEhL2O36e8I0nO2Wyk64ldY'
    });

   return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=ES&locale=es-419%2Ces%3Bq%3D0.9&offset=0&limit=6',{headers});
          
  }


  getArtista(campo:string){
    const headers= new HttpHeaders({
      'Authorization':'Bearer BQD5A9nIK2is662cPILuDMGnW23DASb29KNxp579NLEbtiVKWdLkr_OGLGXBKDDiDC8b34BKPyckfvyDgR8RYmemr4-OIEhL2O36e8I0nO2Wyk64ldY'
    });

   return this.http.get(`https://api.spotify.com/v1/search?q=${campo}&type=artist&limit=10`,{headers});
   
  }
}
