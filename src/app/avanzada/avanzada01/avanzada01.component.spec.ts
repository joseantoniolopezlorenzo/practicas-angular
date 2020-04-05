import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Avanzada01Component } from './avanzada01.component';

describe('Avanzada01Component', () => {
  let component: Avanzada01Component;
  let fixture: ComponentFixture<Avanzada01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Avanzada01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Avanzada01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
