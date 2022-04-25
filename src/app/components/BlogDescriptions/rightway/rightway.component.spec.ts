import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightwayComponent } from './rightway.component';

describe('RightwayComponent', () => {
  let component: RightwayComponent;
  let fixture: ComponentFixture<RightwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
