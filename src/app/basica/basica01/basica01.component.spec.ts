import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Basica01Component } from './basica01.component';

describe('Basica01Component', () => {
  let component: Basica01Component;
  let fixture: ComponentFixture<Basica01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Basica01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Basica01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
