import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { AccountsOrdersComponent } from './components/contact/Help/accounts-orders/accounts-orders.component';
import { OthersComponent } from './components/contact/Help/others/others.component';
import { PaymentComponent } from './components/contact/Help/payment/payment.component';
import { ShippingComponent } from './components/contact/Help/shipping/shipping.component';
import { ViewProductComponent } from './components/products/view-product/view-product.component';
import { CartItemsComponent } from './components/products/cart-items/cart-items.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'./Home',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactComponent,canActivate: [AuthGuard]},
  {path:'product',component:ProductsComponent,canActivate: [AuthGuard]},
  {path:'accountsOrders',component:AccountsOrdersComponent},
  {path:'others',component:OthersComponent},
  {path:'payment',component:PaymentComponent},
  {path:'shipping',component:ShippingComponent},
  {path:"viewProduct/:id",component:ViewProductComponent},
  {path:"cartItem",component:CartItemsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
