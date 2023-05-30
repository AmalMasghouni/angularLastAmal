import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterDevComponent } from './consulter-dev.component';

describe('ConsulterDevComponent', () => {
  let component: ConsulterDevComponent;
  let fixture: ComponentFixture<ConsulterDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
