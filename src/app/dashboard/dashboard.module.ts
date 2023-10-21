import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { IconsModule } from './pages/icons/icons.module';
import { FornsModule as FornsPageModule } from './pages/forns/forns.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { HomeModule } from './pages/home/home.module';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    IconsModule,
    FornsPageModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    HomeModule,
  ],
  exports :[
    DashboardComponent
  ]

})
export class DashboardModule { }
