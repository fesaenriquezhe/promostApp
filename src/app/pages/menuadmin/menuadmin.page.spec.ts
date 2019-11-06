import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuadminPage } from './menuadmin.page';

describe('MenuadminPage', () => {
  let component: MenuadminPage;
  let fixture: ComponentFixture<MenuadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
