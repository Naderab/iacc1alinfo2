import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  a = 1;
  updateA() {
    this.a = 2;
  }
  apiUrl = 'http://localhost:3000/residence/';
  constructor(private http: HttpClient) {}

  getResidences() {
    return this.http.get(this.apiUrl);
  }

  addResidence(body: Residence) {
    return this.http.post(this.apiUrl, body);
  }

  updateResidence(body: Residence) {
    return this.http.put(this.apiUrl + body.id, body);
  }

  deleteResidence(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
}
