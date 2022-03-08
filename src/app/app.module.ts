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
import { ColorDirective } from './color.directive';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './Components/blog/blog.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SettingComponent } from './Components/setting/setting.component';
import { ChatComponent } from './Components/chat/chat.component';
import { GameComponent } from './Components/game/game.component';


let routes:Routes=[
{path:"",component:MainComponent},
{path:"Error",component:ErrorComponent},
{path:"slideshow",component:SlideShowComponent},
{path:"main",component:MainComponent},
{path:"product",component:ProductComponent},
{path:"blog",component:BlogComponent},
{path:"profile",component:ProfileComponent},
{path:"setting",component:SettingComponent},
{path:"chat",component:ChatComponent},
{path:"game",component:GameComponent},


]


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
    SlideShowComponent,
    ColorDirective,
    BlogComponent,
    ProfileComponent,
    SettingComponent,
    ChatComponent,
    GameComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
