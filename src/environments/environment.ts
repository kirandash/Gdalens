// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
};

export const firebase = {
  apiKey: "AIzaSyBiKe31zyPYizSyXw8FCdXRgkLa1jhiF-U",
  authDomain: "glamsdalens-207e1.firebaseapp.com",
  databaseURL: "https://glamsdalens-207e1.firebaseio.com",
  storageBucket: "glamsdalens-207e1.appspot.com",
  messagingSenderId: "520815046064",
};

// set this to true to use static data from "data" folder
export const staticData = true;
