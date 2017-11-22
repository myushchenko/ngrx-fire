import { Action } from '@ngrx/store';
import { Post } from '../post/post.model';

export const CREATE = '[Post] create new post';

export const GET_ALL = '[Post] get all posts';
export const GET_ALL_SUCCESS = '[Post] get all posts success';

export const GET_POST = '[Post] get';
export const GET_POST_SUCCESS = '[Post] get success';

export const DELETE = '[Post] delete';

export const UPDATE = '[Post] update';

export const SUCCESS = '[Post] Successful firestore save'

export class Create implements Action {
	readonly type = CREATE;
	constructor(public post: Post) { }
}

export class Success implements Action {
	readonly type = SUCCESS;
	constructor() { }
}

export class GetAll implements Action {
	readonly type = GET_ALL;
	constructor() { }
}

export class GetAllSuccess implements Action {
	readonly type = GET_ALL_SUCCESS;
	constructor(public posts: Post[]) { };
}

export class GetPost implements Action {
	readonly type = GET_POST;
	constructor(public payload: string) { }
}

export class GetPostSuccess implements Action {
	readonly type = GET_POST_SUCCESS;
	constructor(public payload: Post) { }
}

export class Delete implements Action {
	readonly type = DELETE;
	constructor(public id: string) { }
}

export class Update implements Action {
	readonly type = UPDATE;
	constructor(
		public id: string,
		public changes: Partial<Post>,
	) { }
}

export type All
	= Create
	| Success
	| GetAll
	| GetAllSuccess
	| GetPost
	| GetPostSuccess
	| Delete
	| Update
