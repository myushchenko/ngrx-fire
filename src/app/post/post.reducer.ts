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
		/*case PostActions.GET_ALL_POST:
			return {
				...state,
				loading: true
			};
		case PostActions.GET_ALL_POST_SUCCESS:
			return {
				...state,
				items: action.payload,
				loading: false
			};*/
		case PostActions.GET_ALL_POST_SUCCESS:
            return postAdapter.addAll(action.posts, state);
		case PostActions.GET_POST:
			return {
				...state,
				loading: true
			};
		case PostActions.GET_POST_SUCCESS:
			return {
				...state,
				...action.payload,
				loading: false
			};
		case PostActions.ADD_POST:
			console.log('add', action.payload.post)
			return postAdapter.addOne(action.payload.post, state)
			/*return {
				...state,
				...action.payload,
				loading: true
			}*/

		case PostActions.ADD_POST_SUCCESS:
			return {
				...state,
				loading: false
			}
		case PostActions.ADD_POST_FAIL:
			return {
				...state,
				loading: false
			}
		/*case PostActions.DELETE_POST:
			return {
				...state,
				...action.payload,
				loading: true
			}
		case PostActions.DELETE_POST_SUCCESS:
			return {
				...state,
				loading: false
			}
		case PostActions.DELETE_POST_FAIL:
			return {
				...state,
				loading: false
			}*/
		/*case PostActions.VOTE_UPDATE:
			return {
				...state,
				...action.payload,
				loading: true
			};
		case PostActions.VOTE_SUCCESS:
			return {
				...state,
				loading: false
			};
		case PostActions.VOTE_FAIL:
			return {
				...state,
				...action.payload,
				loading: false
			};*/
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
