import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bas01sub01Component } from './bas01sub01.component';

describe('Bas01sub01Component', () => {
  let component: Bas01sub01Component;
  let fixture: ComponentFixture<Bas01sub01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bas01sub01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bas01sub01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
