import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// 1. Import the libs you need
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { RouterModule } from "@angular/router";
//import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { MyOrderComponent } from "./my-order/my-order.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";

const firebaseConfig = {
  apiKey: "AIzaSyDDrrLz5la16L53cfA_go94JOwiZkYh7fI",
  authDomain: "oshop-7bc83.firebaseapp.com",
  databaseURL: "https://oshop-7bc83.firebaseio.com",
  projectId: "oshop-7bc83",
  storageBucket: "oshop-7bc83.appspot.com",
  messagingSenderId: "910580078056",
  appId: "1:910580078056:web:9145d9aa28e48abf35c05d",
  measurementId: "G-4N21NRHKT3"
};

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    //NgbModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "products", component: ProductsComponent },
      { path: "Shopping-cart", component: ShoppingCartComponent },
      { path: "check-out", component: CheckOutComponent },
      { path: "order-success", component: OrderSuccessComponent },
      { path: "login", component: LoginComponent },
      { path: "my/orders", component: MyOrderComponent },
      { path: "admin/products", component: AdminProductsComponent },
      { path: "admin/orders", component: AdminOrdersComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
