import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { simpleReducer } from './simple.reducer';
import { postReducer } from './reducers/post.reducer';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
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
		StoreModule.forRoot({
			message: simpleReducer,
			post: postReducer
		}),
		StoreDevtoolsModule.instrument({
			maxAge: 10 // number of states to retain
		}),
		AngularFirestoreModule,
		AngularFireModule.initializeApp(environment.firebaseConfig)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
