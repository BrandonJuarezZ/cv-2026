import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';

import { InterestsComponent } from './interests.component';

describe('InterestsComponent', () => {
  let component: InterestsComponent;
  let fixture: ComponentFixture<InterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterestsComponent],
      providers: [
        { provide: AngularFirestore, useValue: { collection: () => ({ snapshotChanges: () => of([]) }) } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
