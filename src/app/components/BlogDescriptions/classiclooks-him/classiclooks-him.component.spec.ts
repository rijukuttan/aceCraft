import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassiclooksHimComponent } from './classiclooks-him.component';

describe('ClassiclooksHimComponent', () => {
  let component: ClassiclooksHimComponent;
  let fixture: ComponentFixture<ClassiclooksHimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassiclooksHimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassiclooksHimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
