import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatetocupcakesComponent } from './corporatetocupcakes.component';

describe('CorporatetocupcakesComponent', () => {
  let component: CorporatetocupcakesComponent;
  let fixture: ComponentFixture<CorporatetocupcakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatetocupcakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatetocupcakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
