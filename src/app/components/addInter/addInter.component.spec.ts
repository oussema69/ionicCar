/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddInterComponent } from './addInter.component';

describe('AddInterComponent', () => {
  let component: AddInterComponent;
  let fixture: ComponentFixture<AddInterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
