import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ResidencesComponent } from './pages/residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import { FormResidenceComponent } from './pages/form-residence/form-residence.component';
import { FormApartementComponent } from './pages/form-apartement/form-apartement.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ResidencesComponent,
    UsersComponent,
    NotFoundComponent,
    ApartmentsComponent,
    FormResidenceComponent,
    FormApartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
