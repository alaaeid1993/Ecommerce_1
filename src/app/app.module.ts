import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainComponent } from './Components/main/main.component';
import { ProductComponent } from './Components/product/product.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { ErrorComponent } from './Components/error/error.component';
import { ContactComponent } from './Components/contact/contact.component';
import { SlideShowComponent } from './Components/slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ProductComponent,
    FooterComponent,
    RegistrationComponent,
    LogInComponent,
    ErrorComponent,
    ContactComponent,
    SlideShowComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
