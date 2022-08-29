import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavTopComponent } from './home-nav-top.component';

describe('HomeNavTopComponent', () => {
  let component: HomeNavTopComponent;
  let fixture: ComponentFixture<HomeNavTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNavTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
