import { TestBed } from '@angular/core/testing';

import { InfoInterceptor } from './info.interceptor';

describe('InfoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InfoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InfoInterceptor = TestBed.inject(InfoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
