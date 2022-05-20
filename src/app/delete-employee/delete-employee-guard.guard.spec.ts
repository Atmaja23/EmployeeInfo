import { TestBed } from '@angular/core/testing';

import { DeleteEmployeeGuardGuard } from './delete-employee-guard.guard';

describe('DeleteEmployeeGuardGuard', () => {
  let guard: DeleteEmployeeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeleteEmployeeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
