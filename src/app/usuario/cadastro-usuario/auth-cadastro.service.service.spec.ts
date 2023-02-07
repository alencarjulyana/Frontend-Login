import { TestBed } from '@angular/core/testing';

import { AuthCadastroServiceService } from './auth-cadastro.service.service';

describe('AuthCadastroServiceService', () => {
  let service: AuthCadastroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCadastroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
