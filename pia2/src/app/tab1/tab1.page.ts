import { Component } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  nuevasCanciones: any[]=[];
  nuevasCanciones2: any[]=[];

  constructor( private spotify: SpotifyService) {

    this.spotify.getNewReleases()
    .subscribe((data:any)=>{
      console.log(data.albums.items);
      this.nuevasCanciones=data.albums.items;
    });

    this.spotify.getNewReleasesEs()
    .subscribe((data:any)=>{
      console.log(data.albums.items);
      this.nuevasCanciones2=data.albums.items;
    });
  }
 
}

