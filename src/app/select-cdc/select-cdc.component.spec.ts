import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCDCComponent } from './select-cdc.component';

describe('SelectCDCComponent', () => {
  let component: SelectCDCComponent;
  let fixture: ComponentFixture<SelectCDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCDCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
