import { MessageComponent } from './pages/message/message.component';
import { EmployeeChatComponent } from './pages/employee/employee-chat/employee-chat.component';
import { EmployeeChatGridComponent } from './pages/employee/employee-chat-grid/employee-chat-grid.component';
import { EmployeeHeaderComponent } from './pages/employee/employee-header/employee-header.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DefaultComponent } from './pages/help/default/default.component';
import { ChatComponent } from './pages/help/chat/chat.component';
import { Confirm_purchaseComponent } from './pages/purchase/confirm_purchase/confirm_purchase.component';
import { Purchase_completeComponent } from './pages/purchase/purchase_complete/purchase_complete.component';
import { PaymentTypeChoosePageComponent } from './pages/payment/payment-type-choose-page.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { ProductsCardComponent } from './pages/products/products-card/products-card.component';
import { ProductsComponent } from './pages/products/products.component';
import { CreditcardPageComponent } from './pages/payment/creditcard/creditcard-page.component';
import { BilletPageComponent } from './pages/payment/billet/billet-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PixPageComponent } from './pages/payment/pix/pix-page.component';
import { ClientPageComponent } from './pages/client/client-page.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HelpPageComponent } from './pages/help/help-page.component';
import { CartPageComponent } from './pages/cart/cart-page.component';
import { NgModule } from '@angular/core';
import { PurchaseComponent } from './pages/purchase/purchase.component';

const routes: Routes =
  [
    { path: '', pathMatch: 'full', component: HomePageComponent },
    { path: 'messages', component: MessageComponent },
    {
      path: 'products', component: ProductsComponent,
      children:
        [
          { path: 'detail/:id', component: ProductDetailComponent },
          { path: 'product-card/:categoryid', component: ProductsCardComponent, pathMatch: 'full' }
        ]
    },

    { path: 'client', pathMatch: 'full', component: ClientPageComponent },
    { path: 'cart', pathMatch: 'full', component: CartPageComponent },
    {
      path: 'help', component: HelpPageComponent,
      children:
        [
          { path: 'default', component: DefaultComponent },
          {
            path: 'chat', component: ChatComponent
          },
        ]
    },
    {
      path: 'employee-page', component: EmployeeComponent,
      children:
        [
          { path: 'home', component: EmployeeHeaderComponent },
          {
            path: 'chat-page', component: EmployeeChatGridComponent, children:
              [
                { path: 'chat/:clientId', component: EmployeeChatComponent }
              ]
          },
        ]
    },
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
      path: 'purchase', component: PurchaseComponent,
      children:
        [
          { path: 'confirm', component: Confirm_purchaseComponent },
          { path: 'complete', component: Purchase_completeComponent }
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
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }