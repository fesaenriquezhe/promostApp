import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateempresaPage } from './updateempresa.page';

describe('UpdateempresaPage', () => {
  let component: UpdateempresaPage;
  let fixture: ComponentFixture<UpdateempresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateempresaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
