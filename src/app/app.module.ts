import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Redux*/
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';

import { PostModule } from './post/post.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		//Custom modules
		PostModule,
		//Core modules
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		//NGRX
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25 // number of states to retain
		}),

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
