import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post.model';
import { Store } from '@ngrx/store';
import * as actions from '../post.actions';
import * as fromPost from '../post.reducer';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PostAddComponent } from '../post-add/post-add.component';

@Component({
	selector: 'post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
	post$: Observable<any>;
	createPostDialogRef: MatDialogRef<PostAddComponent>;

	constructor(private store: Store<fromPost.AppState>, private dialog: MatDialog) {
		this.post$ = this.store.select(fromPost.selectAll);
	}

	ngOnInit() {
		this.store.dispatch(new actions.GetAllPost());
	}

	vote(post: Post, val: number) {
		post.votes += val
		this.store.dispatch(new actions.VoteUpdate(post.id, post));
	}

	delete(id: string) {
		this.store.dispatch(new actions.DeletePost(id));
	}

	addPostDialog() {
		this.createPostDialogRef = this.dialog.open(PostAddComponent, {
			hasBackdrop: false
		});
	}

}
