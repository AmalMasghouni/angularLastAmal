import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCdcComponent } from './ajout-cdc.component';

describe('AjoutCdcComponent', () => {
  let component: AjoutCdcComponent;
  let fixture: ComponentFixture<AjoutCdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCdcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
