import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './User/cart/cart.component';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./User/user-module/user-module.module').then(m=>m.UserModuleModule)},
  {path:'Cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
