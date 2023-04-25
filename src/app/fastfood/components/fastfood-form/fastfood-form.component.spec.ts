import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodFormComponent } from './fastfood-form.component';

describe('FastfoodFormComponent', () => {
  let component: FastfoodFormComponent;
  let fixture: ComponentFixture<FastfoodFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastfoodFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastfoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
