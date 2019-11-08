import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArreglarPage } from './arreglar.page';

describe('ArreglarPage', () => {
  let component: ArreglarPage;
  let fixture: ComponentFixture<ArreglarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArreglarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArreglarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
