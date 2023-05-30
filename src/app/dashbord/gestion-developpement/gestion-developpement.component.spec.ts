import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeveloppementComponent } from './gestion-developpement.component';

describe('GestionDeveloppementComponent', () => {
  let component: GestionDeveloppementComponent;
  let fixture: ComponentFixture<GestionDeveloppementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeveloppementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDeveloppementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
