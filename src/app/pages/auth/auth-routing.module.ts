import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthPageComponent } from './auth-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
     children:
    [
      { path: 'login', component: LoginFormComponent },
    ]
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

export class AuthRoutingModule {
}
