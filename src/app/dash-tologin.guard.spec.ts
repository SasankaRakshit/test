import { TestBed } from '@angular/core/testing';

import { DashTologinGuard } from './dash-tologin.guard';

describe('DashTologinGuard', () => {
  let guard: DashTologinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DashTologinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
