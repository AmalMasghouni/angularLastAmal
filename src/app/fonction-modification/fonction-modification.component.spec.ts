import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionModificationComponent } from './fonction-modification.component';

describe('FonctionModificationComponent', () => {
  let component: FonctionModificationComponent;
  let fixture: ComponentFixture<FonctionModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonctionModificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FonctionModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
