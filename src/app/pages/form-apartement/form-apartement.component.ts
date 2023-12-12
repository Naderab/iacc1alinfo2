import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-apartement',
  templateUrl: './form-apartement.component.html',
  styleUrls: ['./form-apartement.component.css']
})
export class FormApartementComponent {

  formApartment!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formApartment = this.fb.group({
      appartNum: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      floorNum: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      surface: ['', Validators.required],
      terrace: ['', Validators.required],
      surfaceTerrace: [''],
      category: ['', Validators.required],
      description: ['', [Validators.required,Validators.minLength(10)]],
    });
  }
  get appartNum() {
    return this.formApartment.get('appartNum');
  }
  get floorNum() {
    return this.formApartment.get('floorNum');
  }
  get surface() {
    return this.formApartment.get('surface');
  }
  get terrace() {
    return this.formApartment.get('terrace');
  }
  get surfaceTerrace() {
    return this.formApartment.get('surfaceTerrace');
  }
  get category() {
    return this.formApartment.get('category');
  }
  get description() {
    return this.formApartment.get('description');
  }


  add() {
    console.log(this.formApartment.value);
  }

}
