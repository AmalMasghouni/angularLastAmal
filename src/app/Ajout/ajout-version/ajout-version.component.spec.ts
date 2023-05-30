import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVersionComponent } from './ajout-version.component';

describe('AjoutVersionComponent', () => {
  let component: AjoutVersionComponent;
  let fixture: ComponentFixture<AjoutVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
