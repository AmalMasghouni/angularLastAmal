import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelCDCComponent } from './sel-cdc.component';

describe('SelCDCComponent', () => {
  let component: SelCDCComponent;
  let fixture: ComponentFixture<SelCDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelCDCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelCDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
