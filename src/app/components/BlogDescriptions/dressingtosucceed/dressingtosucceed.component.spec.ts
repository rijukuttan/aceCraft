import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressingtosucceedComponent } from './dressingtosucceed.component';

describe('DressingtosucceedComponent', () => {
  let component: DressingtosucceedComponent;
  let fixture: ComponentFixture<DressingtosucceedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressingtosucceedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DressingtosucceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
