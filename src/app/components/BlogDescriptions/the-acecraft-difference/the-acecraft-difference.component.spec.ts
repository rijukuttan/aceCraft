import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAcecraftDifferenceComponent } from './the-acecraft-difference.component';

describe('TheAcecraftDifferenceComponent', () => {
  let component: TheAcecraftDifferenceComponent;
  let fixture: ComponentFixture<TheAcecraftDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheAcecraftDifferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheAcecraftDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
