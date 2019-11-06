import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiempresaPage } from './miempresa.page';

describe('MiempresaPage', () => {
  let component: MiempresaPage;
  let fixture: ComponentFixture<MiempresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiempresaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
