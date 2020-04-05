import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica01Component } from './practica01.component';

describe('Practica01Component', () => {
  let component: Practica01Component;
  let fixture: ComponentFixture<Practica01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practica01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practica01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
