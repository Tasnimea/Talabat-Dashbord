import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRestrantComponent } from './display-restrant.component';

describe('DisplayRestrantComponent', () => {
  let component: DisplayRestrantComponent;
  let fixture: ComponentFixture<DisplayRestrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRestrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRestrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
