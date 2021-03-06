import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [SidenavComponent, SidenavListComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule

  ],
  exports: [SidenavComponent]
})
export class NavModule { }
