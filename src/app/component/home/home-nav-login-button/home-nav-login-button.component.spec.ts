import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavLoginButtonComponent } from './home-nav-login-button.component';

describe('HomeNavLoginButtonComponent', () => {
  let component: HomeNavLoginButtonComponent;
  let fixture: ComponentFixture<HomeNavLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNavLoginButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNavLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
