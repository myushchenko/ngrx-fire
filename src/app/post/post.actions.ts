import { Action } from '@ngrx/store';
import { Post } from '../post/post.model';

export const CREATE = '[Post] create new post';

export const GET_ALL_POST = '[Post] get all posts';
export const GET_ALL_POST_SUCCESS = '[Post] get all posts success';

export const GET_POST = '[Post] get';
export const GET_POST_SUCCESS = '[Post] get success';

export const ADD_POST = '[Post] add';
export const ADD_POST_SUCCESS = '[Post] add success';
export const ADD_POST_FAIL = '[Post] add fail';

export const DELETE_POST = '[Post] delete';
export const DELETE_POST_SUCCESS = '[Post] delete success';
export const DELETE_POST_FAIL = '[Post] delete fail';

export const VOTE_UPDATE = '[Post] vote';
export const VOTE_SUCCESS = '[Post] vote success';
export const VOTE_FAIL = '[Post] vote fail';

export const SUCCESS = '[Post] Successful firestore save'

export class Create implements Action {
	readonly type = CREATE;
	constructor(public post: Post) {}
}

export class Success implements Action {
    readonly type = SUCCESS;
    constructor() { }
}

export class GetAllPost implements Action {
	readonly type = GET_ALL_POST;
	constructor() { }
}

export class GetAllPostSuccess implements Action {
	readonly type = GET_ALL_POST_SUCCESS;
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

export class AddPost implements Action {
	readonly type = ADD_POST;
	constructor(public payload: any) { }
}

export class AddPostSuccess implements Action {
	readonly type = ADD_POST_SUCCESS;
	constructor(public payload?: any) { }
}

export class AddPostFail implements Action {
	readonly type = ADD_POST_FAIL;
	constructor(public payload?: any) { }
}

export class DeletePost implements Action {
	readonly type =  DELETE_POST;
	constructor(public id: string) { }
}

export class DeleteSuccess implements Action {
	readonly type = DELETE_POST_SUCCESS;
	constructor(public payload?: any) { }
}

export class DeleteFail implements Action {
	readonly type = DELETE_POST_FAIL;
	constructor(public payload?: any) { }
}

export class VoteUpdate implements Action {
	readonly type = VOTE_UPDATE;
	constructor(
        public id: string,
        public changes: Partial<Post>,
      ) { }
}

export class VoteSuccess implements Action {
	readonly type = VOTE_SUCCESS;
	constructor(public payload?: any) { }
}

export class VoteFail implements Action {
	readonly type = VOTE_FAIL;
	constructor(public payload?: any) { }
}

export type All
	= Create
	| Success
	| GetAllPost
	| GetAllPostSuccess
	| GetPost
	| GetPostSuccess
	| AddPost
	| AddPostSuccess
	| AddPostFail
	| DeletePost
	| DeleteSuccess
	| DeleteFail
	| VoteUpdate
	| VoteSuccess
	| VoteFail;
