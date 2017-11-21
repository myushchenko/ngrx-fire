import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/fromPromise';

import * as actions from '../post/post.actions';
import { Post } from './post.model';
//import { PostFirebaseService } from './post-firebase.service';

export type Action = actions.All;

@Injectable()
export class PostEffects {
	constructor(private actions$: Actions, private db: AngularFireDatabase, private afs: AngularFirestore) { }

	 // Listen for the 'QUERY' action, must be the first effect you trigger
	 @Effect() query$: Observable<Action> = this.actions$.ofType(actions.GET_ALL_POST)
		.switchMap(action => {
			const ref = this.afs.collection<Post>('posts')
			return ref.snapshotChanges().map(arr => {
				return arr.map( doc => {
					const data = doc.payload.doc.data()
					return { id: doc.payload.doc.id, ...data } as Post
				})
			})
		})
		.map(arr => {
			console.log(arr)
			return new actions.GetAllPostSuccess(arr)
		})

	// Listen for the 'CREATE' action
	@Effect() create$: Observable<Action> = this.actions$.ofType(actions.CREATE)
		.map((action: actions.Create) => action.post)
		.switchMap(post => {
			const ref = this.afs.doc<Post>(`posts/${post.id}`)
			return Observable.fromPromise(ref.set(post));
		})
		.map(() => {
			return new actions.Success()
		})


	// Listen for the 'UPDATE' action
	@Effect() update$: Observable<Action> = this.actions$.ofType(actions.VOTE_UPDATE)
		 .map((action: actions.VoteUpdate) => action)
		 .switchMap(data => {
			 const ref = this.afs.doc<Post>(`posts/${data.id}`)
			 return Observable.fromPromise( ref.update(data.changes) )
		 })
		 .map(() => {
			 return new actions.Success()
		 })

	// Listen for the 'DELETE' action
	@Effect() delete$: Observable<Action> = this.actions$.ofType(actions.DELETE_POST)
		 .map((action: actions.DeletePost) => action.id )
		 .switchMap(id => {
			 const ref = this.afs.doc<Post>(`posts/${id}`)
			 return Observable.fromPromise( ref.delete() )
		 })
		 .map(() => {
			 return new actions.Success()
		 })

	/*@Effect()
	getAllPost: Observable<Action> = this.actions.ofType(postActions.GET_ALL_POST)
		.delay(2000) // delay to show spinner
		.switchMap(() => this.db.list('posts').snapshotChanges())
		.map(payload => new postActions.GetAllPostSuccess(payload.map(action => {
			console.log('posts', action.payload)
			return { $key: action.payload.key, ...action.payload.val() };
		})));*/

	/*@Effect()
	getPost: Observable<Action> = this.actions.ofType(postActions.GET_POST)
		.map((action: postActions.GetPost) => action.payload)
		.delay(2000) // delay to show spinner
		.switchMap(payload => this.db.object(payload).snapshotChanges()
			.map(action => {
				const $key = action.payload.key;
				const data = { $key, ...action.payload.val() };
				return data;
			})
		)
		.map(post => new postActions.GetPostSuccess(post));*/

	/*@Effect()
	addPost: Observable<Action> = this.actions.ofType(postActions.ADD_POST)
		.map((action: postActions.AddPost) => action.payload)
		.mergeMap(playload => of(this.db.list('posts')
			.push(playload.post)))
		.map(() => new postActions.AddPostSuccess())
		.catch(err => of(new postActions.AddPostFail( {error: err.message})));*/

	/*@Effect()
	deletePost: Observable<Action> = this.actions.ofType(postActions.DELETE_POST)
		.map((action: postActions.DeletePost) => action.payload)
		.mergeMap(payload => this.db.object('posts/' + payload.post.$key).remove())
		.map(() => new postActions.DeleteSuccess())
		.catch(err => of(new postActions.DeleteFail( {error: err.message})));

	@Effect()
	voteUpdate: Observable<Action> = this.actions.ofType(postActions.VOTE_UPDATE)
		.map((action: postActions.VoteUpdate) => action.payload)
		.mergeMap(payload => of(this.db.object('posts/' + payload.post.$key)
			.update({
				votes: payload.post.votes + payload.val
			})))
		.map(() => new postActions.VoteSuccess())
		.catch(err => of(new postActions.VoteFail({ error: err.message })));*/
}
