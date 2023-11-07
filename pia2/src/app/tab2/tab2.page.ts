import { Component } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
campo='';
artistas: any[]=[];

  constructor(private spotify: SpotifyService) {}

  /*buscar(campo:string){
    console.log(campo);
    this.spotify.getArtista(campo)
    .subscribe((data:any)=>{
      console.log(data.artist.items);
      this.artistas=data.artist.items;
    
    });
  }*/
  buscar(campo: string) {
    console.log(campo);
    this.spotify.getArtista(campo)
      .subscribe((data: any) => { 
          console.log(data.artists.items);
          this.artistas = data.artists.items;
      
      });
  }
}
