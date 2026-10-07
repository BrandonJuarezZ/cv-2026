import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { WorkExperienceService } from './work-experience.service';

describe('WorkExperienceService', () => {
  let service: WorkExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: { collection: () => ({}) } }
      ]
    });
    service = TestBed.inject(WorkExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
