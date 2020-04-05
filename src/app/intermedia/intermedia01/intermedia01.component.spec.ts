import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Intermedia01Component } from './intermedia01.component';

describe('Intermedia01Component', () => {
  let component: Intermedia01Component;
  let fixture: ComponentFixture<Intermedia01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Intermedia01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Intermedia01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
