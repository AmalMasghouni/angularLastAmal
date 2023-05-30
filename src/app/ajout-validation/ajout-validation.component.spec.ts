import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutValidationComponent } from './ajout-validation.component';

describe('AjoutValidationComponent', () => {
  let component: AjoutValidationComponent;
  let fixture: ComponentFixture<AjoutValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
