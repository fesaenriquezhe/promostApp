import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioadminPage } from './inicioadmin.page';

describe('InicioadminPage', () => {
  let component: InicioadminPage;
  let fixture: ComponentFixture<InicioadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
