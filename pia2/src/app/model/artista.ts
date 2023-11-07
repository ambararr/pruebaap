import { Musica } from   '../model/musica'; 

export interface Artista {
    id: string,
    nome: string,
    imagemUrl: string,
    musicas?: Musica[]
}
