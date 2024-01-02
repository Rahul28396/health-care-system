import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { SideNavbarComponent } from './navbars/side-navbar/side-navbar.component';
import { HeaderNavbarComponent } from './navbars/header-navbar/header-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonCustomModule } from './common/common-custom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    SideNavbarComponent,
    HeaderNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonCustomModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
