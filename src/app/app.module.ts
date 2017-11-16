import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { simpleReducer } from './simple.reducer';
import { postReducer } from './reducers/post.reducer';


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
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
