import { PaymentTypeChoosePageComponent } from './pages/payment/payment-type-choose/main/payment-type-choose-page/payment-type-choose-page.component';
import { ComputerDetailComponent } from './pages/products/products-category/computers/components/computer-detail/computer-detail.component';
import { ComputersCardComponent } from './pages/products/products-category/computers/components/computers-card/computers-card.component';
import { ComputersComponent } from './pages/products/products-category/computers/computers/computers.component';
import { CreditcardPageComponent } from './pages/payment/creditcard/creditcard-page/creditcard-page.component';
import { BilletPageComponent } from './pages/payment/billet/main/billet-page/billet-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PixPageComponent } from './pages/payment/pix/main/pix-page/pix-page.component';
import { ClientPageComponent } from './pages/client/client-page.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HelpPageComponent } from './pages/help/help-page.component';
import { CartPageComponent } from './pages/cart/cart-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = 
[
  { path: 'homepage', pathMatch: 'full', component: HomePageComponent },
  { 
    path: 'computers', component: ComputersComponent,
    children:
    [
      { path: 'detail/:id', component: ComputerDetailComponent },
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

export class AppRoutingModule {}