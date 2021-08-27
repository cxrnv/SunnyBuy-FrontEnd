import { ComputersHeaderComponent } from './pages/products/products-category/computers/components/computers-header/computers-header.component';
import { ComputersCardComponent } from './pages/products/products-category/computers/components/computers-card/computers-card.component';
import { ComputerDetailComponent } from './pages/products/products-category/computers/components/computer-detail/computer-detail.component';
import { PixPageComponent } from './pages/payment/pix/main/pix-page/pix-page.component';
import { BilletPageComponent } from './pages/payment/billet/main/billet-page/billet-page.component';
import { CreditcardPageComponent } from './pages/payment/creditcard/creditcard-page/creditcard-page.component';
import { PaymentTypeChoosePageComponent } from './pages/payment/payment-type-choose/main/payment-type-choose-page/payment-type-choose-page.component';
import { CartPageComponent } from './pages/cart/containers/cart-page/cart-page.component';
import { ClientPageComponent } from './pages/client/containers/client-page/client-page.component';
import { ComputersComponent } from './pages/products/products-category/computers/computers/computers.component';
import { HomePageComponent } from './pages/home/containers/home-page/home-page.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/containers';
import { AuthGuard } from './pages/auth/guards';
import { NgModule } from '@angular/core';
import { HelpPageComponent } from './pages/help/container/help-page/help-page.component';

const routes: Routes = [
  { path: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard], component: DashboardPageComponent },
  { path: 'homepage', pathMatch: 'full', component: HomePageComponent },
  { 
    path: 'computers', component: ComputersComponent,
    children:
    [
      { path: 'detail', component: ComputerDetailComponent },
      { path: 'computers-card', component: ComputersCardComponent }
    ]
  },

  { path: 'client', pathMatch: 'full', component: ClientPageComponent },
  { path: 'cart', pathMatch: 'full', component: CartPageComponent },
  { path: 'help', component: HelpPageComponent },
  {
    path: 'payment', component: PaymentTypeChoosePageComponent,
    children:
      [
        { path: 'creditCard', component: CreditcardPageComponent },
        { path: 'billet', component: BilletPageComponent },
        { path: 'pix', component: PixPageComponent },
      ]
  },

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