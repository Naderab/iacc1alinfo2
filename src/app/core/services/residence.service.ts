import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  a = 1;
  updateA() {
    this.a = 2
  }
  constructor() { }
}
