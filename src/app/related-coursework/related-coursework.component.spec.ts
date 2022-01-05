import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedCourseworkComponent } from './related-coursework.component';

describe('RelatedCourseworkComponent', () => {
  let component: RelatedCourseworkComponent;
  let fixture: ComponentFixture<RelatedCourseworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedCourseworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedCourseworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
