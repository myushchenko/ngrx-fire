import { TestBed, inject } from '@angular/core/testing';

import { PostFirebaseService } from './post-firebase.service';

describe('PostFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostFirebaseService]
    });
  });

  it('should be created', inject([PostFirebaseService], (service: PostFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
