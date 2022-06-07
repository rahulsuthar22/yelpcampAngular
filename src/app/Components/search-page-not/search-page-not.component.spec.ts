import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageNotComponent } from './search-page-not.component';

describe('SearchPageNotComponent', () => {
  let component: SearchPageNotComponent;
  let fixture: ComponentFixture<SearchPageNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPageNotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
