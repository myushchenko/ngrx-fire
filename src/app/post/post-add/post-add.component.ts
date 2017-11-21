import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../post.model';
import * as actions from '../post.actions';

interface AppState {
	post: Post;
}

@Component({
	selector: 'post-add',
	templateUrl: './post-add.component.html',
	styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

	constructor(private store: Store<AppState>) { }

	ngOnInit() {
	}

	add() {
		const post: Post = {
			id: new Date().getUTCMilliseconds().toString(),
			text: 'Generated name ' + new Date().getUTCMilliseconds().toString(),
			votes: 1
		};
		this.store.dispatch(new actions.Create(post));
	}

}
