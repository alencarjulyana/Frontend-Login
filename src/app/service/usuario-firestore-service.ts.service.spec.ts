import { TestBed } from '@angular/core/testing';

import { UsuarioFirestoreServiceTsService } from './usuario-firestore-service.ts.service';

describe('UsuarioFirestoreServiceTsService', () => {
  let service: UsuarioFirestoreServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioFirestoreServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
