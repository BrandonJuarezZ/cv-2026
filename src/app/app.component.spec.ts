import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({ selector: 'app-header', template: '' })
class HeaderStubComponent {}

@Component({ selector: 'app-work-experience', template: '' })
class WorkExperienceStubComponent {}

@Component({ selector: 'app-skills', template: '' })
class SkillsStubComponent {}

@Component({ selector: 'app-education', template: '' })
class EducationStubComponent {}

@Component({ selector: 'app-certificates', template: '' })
class CertificatesStubComponent {}

@Component({ selector: 'app-languages', template: '' })
class LanguagesStubComponent {}

@Component({ selector: 'app-interests', template: '' })
class InterestsStubComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent,
        HeaderStubComponent,
        WorkExperienceStubComponent,
        SkillsStubComponent,
        EducationStubComponent,
        CertificatesStubComponent,
        LanguagesStubComponent,
        InterestsStubComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mycv'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mycv');
  });

  it('should render the header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  });
});
