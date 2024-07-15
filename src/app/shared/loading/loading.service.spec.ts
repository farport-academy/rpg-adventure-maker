import { TestBed } from '@angular/core/testing';

import { LoadingService } from '../../shared/loading/loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a loadingCount proprety', ()=>{
    expect(service.loadingCount).toBe(0)
  })

  it('should increment loading', () =>{
    service.loadingCount++;
    expect(service.loadingCount).toBe(1)
  })

  it('should decrement loading', () =>{
    service.loadingCount++;
    service.loadingCount--;
    expect(service.loadingCount).toBe(0)
  })

  it('should set isLoading true if loadingCount > 0', ()=>{
    service.loadingCount++;
    expect(service.isLoading).toBeTruthy()
  })

});
