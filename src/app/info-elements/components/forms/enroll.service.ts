import { Injectable } from '@angular/core';
import { Enroll } from './enroll';

@Injectable()
export class EnrollService {

  constructor() { }

  save(enroll, callback) {
  	callback(enroll);
  }
}
