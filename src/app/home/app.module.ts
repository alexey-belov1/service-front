import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertComponent } from '../layouts/alert/alert.component';
import { NavbarComponent } from '../layouts/navbar/navbar.component';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    NavbarComponent,
    MainLayoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
