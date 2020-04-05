import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediaComponent } from './intermedia.component';

describe('IntermediaComponent', () => {
  let component: IntermediaComponent;
  let fixture: ComponentFixture<IntermediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
