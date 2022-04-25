import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectingComponent } from './selecting.component';

describe('SelectingComponent', () => {
  let component: SelectingComponent;
  let fixture: ComponentFixture<SelectingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
