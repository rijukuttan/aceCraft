import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './components/products/single-product/single-product.component';
import { ViewProductComponent } from './components/products/view-product/view-product.component';
import { SortPipe } from './Pipes/sort.pipe';
import { AccountsOrdersComponent } from './components/contact/Help/accounts-orders/accounts-orders.component';
import { OthersComponent } from './components/contact/Help/others/others.component';
import { PaymentComponent } from './components/contact/Help/payment/payment.component';
import { ShippingComponent } from './components/contact/Help/shipping/shipping.component';
import { CartItemsComponent } from './components/products/cart-items/cart-items.component';
import { CounterComponent } from './components/products/counter/counter.component';
import { CounterchildComponent } from './components/products/counter/counterchild/counterchild.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ContactComponent,
    ProductsComponent,
    SingleProductComponent,
    ViewProductComponent,
    SortPipe,
    AccountsOrdersComponent,
    OthersComponent,
    PaymentComponent,
    ShippingComponent,
    CartItemsComponent,
    CounterComponent,
    CounterchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
