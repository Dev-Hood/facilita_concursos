import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseSlideComponent } from './mouse-slide.component';

describe('MouseSlideComponent', () => {
  let component: MouseSlideComponent;
  let fixture: ComponentFixture<MouseSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouseSlideComponent]
    });
    fixture = TestBed.createComponent(MouseSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
