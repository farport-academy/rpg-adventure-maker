import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiClientModule } from '../modules/apiClientModule';

describe('CharactersService', () => {
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApiClientModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],

    });
    
    service = TestBed.inject(CharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
