import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { environment } from '../../environments/environment';

/* Redux*/
import { StoreModule } from '@ngrx/store';
import { postReducer } from './post.reducer';

/* AngularFilre2*/
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './post.effects';
import { PostAddComponent } from './post-add/post-add.component';
import { PostService } from './post.service';
import { MaterialModule } from '../material/material.module';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		EffectsModule.forRoot([PostEffects]),
		StoreModule.forFeature('post', postReducer),
		AngularFirestoreModule,
		AngularFireDatabaseModule,
		AngularFireModule.initializeApp(environment.firebaseConfig.post)
	],
	exports: [PostListComponent],
	declarations: [PostListComponent, PostAddComponent],
	providers: [PostService],
	entryComponents: [PostAddComponent]
})
export class PostModule { }
