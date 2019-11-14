import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsempresaPage } from './detailsempresa.page';

describe('DetailsempresaPage', () => {
  let component: DetailsempresaPage;
  let fixture: ComponentFixture<DetailsempresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsempresaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
