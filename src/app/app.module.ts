import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ResidencesComponent } from './pages/residences/residences.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ResidencesComponent,
    UsersComponent,
    NotFoundComponent,
    ApartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
