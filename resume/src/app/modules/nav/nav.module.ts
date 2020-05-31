import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [SidenavComponent, SidenavListComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule

  ],
  exports: [SidenavComponent]
})
export class NavModule { }
