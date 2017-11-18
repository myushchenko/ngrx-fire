import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

//import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

import { Post } from './models/post.model';
import * as postActions from './actions/post.actions';

interface AppState {
	message: string;
	post: Post;
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	post$: Observable<Post>;

	constructor(private store: Store<AppState>, db: AngularFireDatabase) {
		this.post$ = this.store.select('post');
	}

	getPost() {
		this.store.dispatch(new postActions.GetPost('/posts/testPost'));
	}

	vote(post: Post, val: number) {
		this.store.dispatch(new postActions.VoteUpdate({ post, val }));
	}

}
