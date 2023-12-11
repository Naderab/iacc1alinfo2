import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './pages/residences/residences.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import { FormResidenceComponent } from './pages/form-residence/form-residence.component';

const routes: Routes = [
  { path: 'residences', component: ResidencesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: 'residences', pathMatch: 'full' },
  { path: 'residence/:id/:title', component: ApartmentsComponent },
  { path: 'addResidence', component: FormResidenceComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
