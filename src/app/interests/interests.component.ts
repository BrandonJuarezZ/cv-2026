import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Interest } from '../models/interests/interests.model';
import { InterestsService } from '../services/interests-service/interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  interests: Interest[] = [];

  constructor(public interestsService: InterestsService) {
    this.interestsService.getInterests().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() })))
    ).subscribe(data => {
      this.interests = data;
    });
  }
}
