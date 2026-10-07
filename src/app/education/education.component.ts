import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Education } from '../models/education/education.model';
import { EducationService } from '../services/education-service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Education[] = [];

  constructor(public educationService: EducationService) {
    this.educationService.getEducation().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() })))
    ).subscribe(data => {
      this.education = data;
    });
  }
}
