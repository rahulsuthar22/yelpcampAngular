import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCampComponent } from './individual-camp.component';

describe('IndividualCampComponent', () => {
  let component: IndividualCampComponent;
  let fixture: ComponentFixture<IndividualCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
