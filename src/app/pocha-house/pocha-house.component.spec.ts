import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PochaHouseComponent } from './pocha-house.component';

describe('PochaHouseComponent', () => {
  let component: PochaHouseComponent;
  let fixture: ComponentFixture<PochaHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PochaHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PochaHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
