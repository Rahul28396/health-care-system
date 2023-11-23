import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';

@NgModule({
  declarations: [
    SideNavbarComponent,
    HeaderNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideNavbarComponent,
    HeaderNavbarComponent
  ]
})
export class NavbarsModule { }
