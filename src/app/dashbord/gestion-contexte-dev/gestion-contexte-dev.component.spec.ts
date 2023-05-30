import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionContexteDevComponent } from './gestion-contexte-dev.component';

describe('GestionContexteDevComponent', () => {
  let component: GestionContexteDevComponent;
  let fixture: ComponentFixture<GestionContexteDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionContexteDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionContexteDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
