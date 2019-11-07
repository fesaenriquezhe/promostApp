import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateempresaPage } from './createempresa.page';

describe('CreateempresaPage', () => {
  let component: CreateempresaPage;
  let fixture: ComponentFixture<CreateempresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateempresaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
