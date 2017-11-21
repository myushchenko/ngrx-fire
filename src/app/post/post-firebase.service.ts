import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class PostFirebaseService {
	items: AngularFireList<any[]>;

	constructor(private db: AngularFireDatabase) {
		this.items = this.db.list('/events');
	}

}
