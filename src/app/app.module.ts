import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// 1. Import the libs you need
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppComponent } from "./app.component";
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';

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
  declarations: [AppComponent, BsNavbarComponent],
  imports: [
    BrowserModule,
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
