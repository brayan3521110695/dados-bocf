import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBocfComponent } from './navbar-bocf.component';

describe('NavbarBocfComponent', () => {
  let component: NavbarBocfComponent;
  let fixture: ComponentFixture<NavbarBocfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarBocfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarBocfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
