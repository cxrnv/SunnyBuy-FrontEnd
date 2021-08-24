import { CartPageComponent } from './pages/cart/containers/cart-page/cart-page.component';
import { ClientPageComponent } from './pages/client/containers/client-page/client-page.component';
import { ComputersComponent } from './pages/products/products-category/computers/containers/computers/computers.component';
import { HomePageComponent } from './pages/home/containers/home-page/home-page.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/containers';
import {AuthGuard} from './pages/auth/guards';
import { NgModule } from '@angular/core';
import { HelpPageComponent } from './pages/help/container/help-page/help-page.component';

const routes: Routes = [
  { path: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard], component: DashboardPageComponent },
  { path: 'homepage', pathMatch: 'full', component: HomePageComponent },
  { path: 'computers', pathMatch: 'full', component: ComputersComponent },
  { path: 'client', pathMatch: 'full', component: ClientPageComponent },
  { path: 'cart', pathMatch: 'full', component: CartPageComponent },
  { path: 'help', pathMatch: 'full', component: HelpPageComponent },

  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}