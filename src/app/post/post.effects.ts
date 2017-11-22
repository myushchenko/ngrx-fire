import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';

import * as actions from '../post/post.actions';
import { Post } from './post.model';
import { PostService } from './post.service';

export type Action = actions.All;

@Injectable()
export class PostEffects {
	constructor(private actions$: Actions, private service: PostService) { }

	// Listen for the 'GET_ALL' action, must be the first effect you trigger
	@Effect() query$: Observable<Action> = this.actions$.ofType(actions.GET_ALL)
		.switchMap(action => this.service.getAll())
		.map(arr => new actions.GetAllSuccess(arr))

	// Listen for the 'CREATE' action
	@Effect() create$: Observable<Action> = this.actions$.ofType(actions.CREATE)
		.map((action: actions.Create) => action.post)
		.switchMap(post => this.service.create(post))
		.map(() => new actions.Success())

	// Listen for the 'UPDATE' action
	@Effect() update$: Observable<Action> = this.actions$.ofType(actions.UPDATE)
		.map((action: actions.Update) => action)
		.switchMap(data => this.service.update(data))
		.map(() => new actions.Success())

	// Listen for the 'DELETE' action
	@Effect() delete$: Observable<Action> = this.actions$.ofType(actions.DELETE)
		.map((action: actions.Delete) => action.id)
		.switchMap(id => this.service.delete(id))
		.map(() => new actions.Success())
}
