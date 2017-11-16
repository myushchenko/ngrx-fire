import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';

export type Action = PostActions.All;

/// Default app state
const defaultState: Post = {
	text: 'Hello. I am the default post',
	likes: 0
};

/// Reducer function
export function postReducer(state: Post = defaultState, action: Action) {
	console.log(action.type, state);
	switch (action.type) {
		case PostActions.EDIT_TEXT:
			return { ...state, text: action.payload };
		case PostActions.UPVOTE:
			return { ...state, likes: state.likes + 1 };
		case PostActions.DOWNVOTE:
			return { ...state, likes: state.likes - 1 };
		case PostActions.RESET:
			return defaultState;
		default:
			return state;
	}
}
