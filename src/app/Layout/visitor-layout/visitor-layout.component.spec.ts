import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorLayoutComponent } from './visitor-layout.component';

describe('VisitorLayoutComponent', () => {
  let component: VisitorLayoutComponent;
  let fixture: ComponentFixture<VisitorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
