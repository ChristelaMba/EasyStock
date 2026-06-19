import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideContainer } from './aside-container';

describe('AsideContainer', () => {
  let component: AsideContainer;
  let fixture: ComponentFixture<AsideContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(AsideContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
