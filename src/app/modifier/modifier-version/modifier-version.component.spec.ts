import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVersionComponent } from './modifier-version.component';

describe('ModifierVersionComponent', () => {
  let component: ModifierVersionComponent;
  let fixture: ComponentFixture<ModifierVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
