import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCdcComponent } from './gestion-cdc.component';

describe('GestionCdcComponent', () => {
  let component: GestionCdcComponent;
  let fixture: ComponentFixture<GestionCdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCdcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
