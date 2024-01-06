import { Component } from '@angular/core';
import { ResidenceService } from 'src/app/core/services/residence.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private rs: ResidenceService) {}
  updateAFromComponent() {
    this.rs.updateA();
  }
}
