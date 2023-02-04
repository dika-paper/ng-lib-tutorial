import { TestBed } from '@angular/core/testing';

import { MyExampleLibService } from './my-example-lib.service';

describe('MyExampleLibService', () => {
  let service: MyExampleLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyExampleLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
