import * as PostActions from '../post/post.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

import { Post } from '../post/post.model';


export interface AppState {
	post: Post;
}

export type Action = PostActions.All;

const postAdapter = createEntityAdapter<Post>();

export interface PostState extends EntityState<Post> { }

export const initialState: PostState = postAdapter.getInitialState();

export function postReducer(state: PostState = initialState, action: Action) {
	switch (action.type) {

		case PostActions.GET_ALL_SUCCESS:
			return postAdapter.addAll(action.posts, state);

		default:
			return state;
	}
}


// Create the default selectors
export const getPostState = createFeatureSelector<PostState>('post');

export const {
    selectIds,
	selectEntities,
	selectAll,
	selectTotal,
  } = postAdapter.getSelectors(getPostState);
