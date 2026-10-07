import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { CertificatesService } from './certificates.service';

describe('CertificatesService', () => {
  let service: CertificatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: { collection: () => ({}) } }
      ]
    });
    service = TestBed.inject(CertificatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
