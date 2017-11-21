// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebaseConfig: {
		post: {
			apiKey: "AIzaSyCKVofGusxZ6ct4yOeBeam2SWf32BlEyg0",
			authDomain: "ngrx-fire-8d943.firebaseapp.com",
			databaseURL: "https://ngrx-fire-8d943.firebaseio.com",
			projectId: "ngrx-fire-8d943",
			storageBucket: "ngrx-fire-8d943.appspot.com",
			messagingSenderId: "172764076296"
		}
	}
};
