import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Post } from './post.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

	private url: string = 'posts';

	constructor(private afs: AngularFirestore) { }

	public getAll() {
		const ref = this.afs.collection<Post>(this.url)
		return ref.snapshotChanges().map(arr => {
			return arr.map(doc => {
				const data = doc.payload.doc.data()
				return { id: doc.payload.doc.id, ...data } as Post
			})
		});
	}

	public create(post) {
		const ref = this.afs.doc<Post>(`${this.url}/${post.id}`)
		return Observable.fromPromise(ref.set(post));
	}

	public update(data) {
		const ref = this.afs.doc<Post>(`${this.url}/${data.id}`)
		return Observable.fromPromise(ref.update(data.changes))
	}

	public delete(id) {
		const ref = this.afs.doc<Post>(`${this.url}/${id}`)
		return Observable.fromPromise(ref.delete())
	}

}
