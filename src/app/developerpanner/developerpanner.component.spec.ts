import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperpannerComponent } from './developerpanner.component';

describe('DeveloperpannerComponent', () => {
  let component: DeveloperpannerComponent;
  let fixture: ComponentFixture<DeveloperpannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperpannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperpannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
