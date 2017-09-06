import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  MdListModule,
  MdIconModule,
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdSlideToggleModule,
  MdGridListModule,
  MdChipsModule,
  MdCheckboxModule,
  MdRadioModule,
  MdTabsModule,
  MdInputModule,
  MdProgressBarModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { ProfileComponent } from "./profile.component";
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileRoutes } from "./profile.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdChipsModule,
    MdCheckboxModule,
    MdRadioModule,
    MdTabsModule,
    MdInputModule,
    MdProgressBarModule,
    FlexLayoutModule,
    NgxDatatableModule,
    ChartsModule,
    FileUploadModule,
    RouterModule.forChild(ProfileRoutes)
  ],
  declarations: [ProfileComponent, ProfileOverviewComponent, ProfileSettingsComponent]
})
export class ProfileModule { }
