import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';

import { LanguagesComponent } from './languages.component';

describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let fixture: ComponentFixture<LanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguagesComponent],
      providers: [
        { provide: AngularFirestore, useValue: { collection: () => ({ snapshotChanges: () => of([]) }) } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
