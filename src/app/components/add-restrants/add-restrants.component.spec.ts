import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestrantsComponent } from './add-restrants.component';

describe('AddRestrantsComponent', () => {
  let component: AddRestrantsComponent;
  let fixture: ComponentFixture<AddRestrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestrantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRestrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
