import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllempresasPage } from './allempresas.page';

describe('AllempresasPage', () => {
  let component: AllempresasPage;
  let fixture: ComponentFixture<AllempresasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllempresasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllempresasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
