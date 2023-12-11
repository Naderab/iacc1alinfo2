import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {
  formResidence = new FormGroup({
    // name: new FormControl({ value:'ResidenceX',disabled:true}),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+'),
    ]),
    /*adresse: new FormGroup({
      city: new FormControl(""),
      code : new FormControl("")
    }),*/
    adresse: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    picture: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.formResidence.get('name');
  }
  get adresse() {
    return this.formResidence.get('adresse');
  }
  get picture() {
    return this.formResidence.get('picture');
  }

  add() {
    console.log(this.formResidence.value);
    console.log(this.formResidence.getRawValue());
  }
}
