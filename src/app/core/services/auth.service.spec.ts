import { TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { provideHttpClient } from '@angular/common/http';
import { AuthModule } from '../modules/auth.module';
import { ApiClientModule } from '../modules/apiClientModule';
import { UserTypes } from '../models/users';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { mocks } from '../utils/test.utils';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    // inietto tutti i moduli collegati al servizio
    TestBed.configureTestingModule({
      imports: [AuthModule, ApiClientModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // verifica che non ci siano richieste in sospeso
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a storage property', () => {
    expect(service.storage).toBeTruthy();
  });

  it('should sing up succesfully', () =>{

    service.signup(mocks.signupData).subscribe((res)=> {
      expect(res).toBe(mocks.mockResponse)
    })
    const mockRequest = httpMock.expectOne(`${service.apiUrl}/signup`);

    expect(mockRequest.request.body).toEqual(mocks.signupData)
    mockRequest.flush(mocks.mockResponse)
  })

  it('should sign in succesfully', () => {

    service.login(mocks.loginData).subscribe((res) => {
      expect(res).toBe(mocks.mockResponse);
    });

    const mockRequest = httpMock.expectOne(`${service.apiUrl}/signin`);

    expect(mockRequest.request.method).toBe('POST');
    expect(mockRequest.request.body).toBe(mocks.loginData);
    
    // la richiesta è conclusa
    mockRequest.flush(mocks.mockResponse);

    expect(service.isLoggedIn).toBeTrue();
    expect(service.token).toBe(mocks.mockResponse.accessToken);
    expect(service.partyId).toBe(mocks.mockResponse.user.partyId);
 
  });

  it('should sign out succesfully', () => {
    service.logout();
    expect(service.isLoggedIn).toBeFalse()
    expect(service.token).toBeNull()
    expect(service.partyId).toBeNull()
  });
});
