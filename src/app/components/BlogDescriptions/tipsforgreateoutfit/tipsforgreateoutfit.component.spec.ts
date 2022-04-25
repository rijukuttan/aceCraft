import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsforgreateoutfitComponent } from './tipsforgreateoutfit.component';

describe('TipsforgreateoutfitComponent', () => {
  let component: TipsforgreateoutfitComponent;
  let fixture: ComponentFixture<TipsforgreateoutfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsforgreateoutfitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsforgreateoutfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
