import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { InterestsService } from './interests.service';

describe('InterestsService', () => {
  let service: InterestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: { collection: () => ({}) } }
      ]
    });
    service = TestBed.inject(InterestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
