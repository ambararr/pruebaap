export const environment = {
  production: true
};

export const SpotifyConfiguration = {
  clientId: 'e44d0bb44cec4d84957fb9c5b7fcd923',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:8101/login/',
  scopes: [
    "user-read-currently-playing", // musica tocando ahora.
    "user-read-recently-played", // leer musica tocada recientemente
    "user-read-playback-state", // leer estado de player de usuario
    "user-top-read", // top artistas y musicas del usuario
    "user-modify-playback-state", // alterar de player de usuario.
    "user-library-read", // leer biblioteca de usuarios
    "playlist-read-private", // leer playlists privadas
    "playlist-read-collaborative" // leer playlists colaborativas
  ]
}