export interface Musica {
    id: string,
    titulo: string,
    artistas: {
      id: string,
      nombre: string
    }[],
    album: {
      id: string,
      nombre: string,
      imageUrl: string
    },
    tempo: string
}
