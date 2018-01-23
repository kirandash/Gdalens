import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCategoryListComponent } from './video-category-list.component';

describe('VideoCategoryListComponent', () => {
  let component: VideoCategoryListComponent;
  let fixture: ComponentFixture<VideoCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
