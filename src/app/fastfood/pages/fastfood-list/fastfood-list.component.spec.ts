import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodListComponent } from './fastfood-list.component';

describe('FastfoodListComponent', () => {
  let component: FastfoodListComponent;
  let fixture: ComponentFixture<FastfoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastfoodListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastfoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
