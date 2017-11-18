import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Redux*/
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { PostEffects } from './effects/post.effects';

/* AngularFilre2*/
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,

		EffectsModule.forRoot([PostEffects]),
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25 // number of states to retain
		}),

		AngularFirestoreModule,
		AngularFireDatabaseModule,
		AngularFireModule.initializeApp(environment.firebaseConfig)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
