export interface Post {
	$key: string;
	loading: boolean;
	text: string;
	votes: number;
	error?: string;
}
