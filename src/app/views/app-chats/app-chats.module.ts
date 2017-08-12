import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  MdIconModule,
  MdButtonModule,
  MdSidenavModule,
  MdMenuModule,
  MdInputModule,
  MdListModule,
  MdToolbarModule,
  MdCardModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppChatsComponent } from './app-chats.component';
import { ChatsRoutes } from "./app-chats.routing";

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdMenuModule,
    MdInputModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    MdCardModule,
    FlexLayoutModule,
    RouterModule.forChild(ChatsRoutes)
  ],
  declarations: [AppChatsComponent]
})
export class AppChatsModule { }
