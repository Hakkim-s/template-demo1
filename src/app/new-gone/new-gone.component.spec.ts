import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoneComponent } from './new-gone.component';

describe('NewGoneComponent', () => {
  let component: NewGoneComponent;
  let fixture: ComponentFixture<NewGoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
