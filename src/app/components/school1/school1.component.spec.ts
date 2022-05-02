import { ComponentFixture, TestBed } from '@angular/core/testing';

import { School1Component } from './school1.component';

describe('School1Component', () => {
  let component: School1Component;
  let fixture: ComponentFixture<School1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ School1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(School1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
