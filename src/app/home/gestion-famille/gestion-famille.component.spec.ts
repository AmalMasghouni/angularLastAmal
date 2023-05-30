import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFamilleComponent } from './gestion-famille.component';

describe('GestionFamilleComponent', () => {
  let component: GestionFamilleComponent;
  let fixture: ComponentFixture<GestionFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionFamilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
