import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from 'src/app/core/models/residence';
import { ResidenceService } from 'src/app/core/services/residence.service';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {
  constructor(private rs:ResidenceService){}
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
    this.rs.addResidence(this.formResidence.value as Residence)
      .subscribe({
      next: () => console.log('residence added'),
      error:(err)=>console.log(err)      
    });
  }
}
