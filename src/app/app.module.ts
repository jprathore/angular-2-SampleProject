import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { JumbotronComponent } from './Components/jumbotron/jumbotrom.component';
import { HomeComponent } from './Components/pages/home.component';

import { AboutComponent } from './Components/pages/about.component';
import { ContactComponent } from './Components/pages/contact.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [ AppComponent
                ,NavbarComponent 
                ,JumbotronComponent
                ,AboutComponent
                ,HomeComponent
                ,ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
