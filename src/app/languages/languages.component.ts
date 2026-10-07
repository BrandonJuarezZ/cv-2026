import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Language } from '../models/languages/languages.model';
import { LanguagesService } from '../services/languages-service/languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  languages: Language[] = [];

  constructor(public languagesService: LanguagesService) {
    this.languagesService.getLanguages().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() })))
    ).subscribe(data => {
      this.languages = data;
    });
  }
}
