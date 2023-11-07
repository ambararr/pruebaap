import { Musica } from   '../model/musica'; 

export interface Playlist {
    id: string,
    nome: string,
    imagemUrl: string,
    musicas?: Musica[]
}

