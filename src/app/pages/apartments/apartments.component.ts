import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  id: string = '';
  constructor(private ac: ActivatedRoute) {
    console.log(this.ac.snapshot.params['id'])
    console.log(this.ac.snapshot.params['title']);
    this.id = this.ac.snapshot.params['id']

  }
}
