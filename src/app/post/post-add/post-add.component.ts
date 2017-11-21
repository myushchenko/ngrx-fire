import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { Post } from '../post.model';
import * as actions from '../post.actions';
import * as fromPost from '../post.reducer';

@Component({
	selector: 'post-add',
	templateUrl: './post-add.component.html',
	styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

	form: FormGroup;

	constructor(private store: Store<fromPost.AppState>,
		private formBuilder: FormBuilder,
		private dialogRef: MatDialogRef<PostAddComponent>) { }

	ngOnInit() {
		this.form = this.formBuilder.group({
			post: ['', Validators.required]
		});
	}

	submit() {
		if (!this.form.valid) {
			return;
		}
		const post: Post = {
			id: new Date().getUTCMilliseconds().toString(),
			text: this.form.value.post,
			votes: 1
		};
		this.store.dispatch(new actions.Create(post));
		this.dialogRef.close();
	}

}
