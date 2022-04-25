import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodytypesWomensComponent } from './bodytypes-womens.component';

describe('BodytypesWomensComponent', () => {
  let component: BodytypesWomensComponent;
  let fixture: ComponentFixture<BodytypesWomensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodytypesWomensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodytypesWomensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
