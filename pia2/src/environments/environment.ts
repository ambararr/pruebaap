// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyDuK6Vfab7y0WF1EMoS4sviF41KpGyibpI",
    authDomain: "piaap-6c0d2.firebaseapp.com",
    projectId: "piaap-6c0d2",
    storageBucket: "piaap-6c0d2.appspot.com",
    messagingSenderId: "509584754123",
    appId: "1:509584754123:web:81fab5ed49fb2dcc50224e",
    measurementId: "G-C5BGDXJMT1"
  }
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
