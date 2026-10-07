import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Skill } from '../models/skills/skills.model';
import { SkillsService } from '../services/skills-service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [];

  constructor(public skillsService: SkillsService) {
    this.skillsService.getSkills().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() })))
    ).subscribe(data => {
      this.skills = data;
    });
  }
}
