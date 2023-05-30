import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFamilleComponent } from './modifier-famille.component';

describe('ModifierFamilleComponent', () => {
  let component: ModifierFamilleComponent;
  let fixture: ComponentFixture<ModifierFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFamilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
