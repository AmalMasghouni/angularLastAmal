import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCdcComponent } from './modifier-cdc.component';

describe('ModifierCdcComponent', () => {
  let component: ModifierCdcComponent;
  let fixture: ComponentFixture<ModifierCdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCdcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierCdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
