import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post.model';
import { Store } from '@ngrx/store';
import * as actions from '../post.actions';
import * as fromPost from '../post.reducer';


@Component({
	selector: 'post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
	post$: Observable<any>;

	constructor(private store: Store<fromPost.AppState>) {
		//this.post$ = this.store.select('post');
		this.post$ = this.store.select(fromPost.selectAll);

		this.post$.subscribe(v => {
			console.log('v', v)
		})
	}

	vote(post: Post, val: number) {
		post.votes += val
		this.store.dispatch(new actions.VoteUpdate(post.id, post));
	}

	delete(id: string) {
		this.store.dispatch(new actions.DeletePost(id));
	}

	ngOnInit() {
		this.store.dispatch(new actions.GetAllPost());
	}

}
