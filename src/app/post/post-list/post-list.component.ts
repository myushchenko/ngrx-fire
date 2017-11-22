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
	postCpount$: Observable<number>;
	createPostDialogRef: MatDialogRef<PostAddComponent>;

	constructor(private store: Store<fromPost.AppState>, private dialog: MatDialog) {
		this.post$ = this.store.select(fromPost.selectAll);
		this.postCpount$ = this.store.select(fromPost.selectTotal);
	}

	ngOnInit() {
		this.store.dispatch(new actions.GetAll());
	}

	vote(post: Post, val: number) {
		post.votes += val
		this.store.dispatch(new actions.Update(post.id, post));
	}

	delete(id: string) {
		this.store.dispatch(new actions.Delete(id));
	}

	addPostDialog() {
		this.createPostDialogRef = this.dialog.open(PostAddComponent, {
			hasBackdrop: true,
			disableClose: true
		});
	}

}
