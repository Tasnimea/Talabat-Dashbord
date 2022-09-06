import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRestrentsComponent } from './show-restrents.component';

describe('ShowRestrentsComponent', () => {
  let component: ShowRestrentsComponent;
  let fixture: ComponentFixture<ShowRestrentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRestrentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRestrentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
