import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWearForAllSeasonsComponent } from './work-wear-for-all-seasons.component';

describe('WorkWearForAllSeasonsComponent', () => {
  let component: WorkWearForAllSeasonsComponent;
  let fixture: ComponentFixture<WorkWearForAllSeasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWearForAllSeasonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWearForAllSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
