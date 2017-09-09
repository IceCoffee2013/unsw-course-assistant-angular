import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminExperienceListComponent} from "./admin-experience-list/admin-experience-list.component";
import {FormsModule} from "@angular/forms";
import {
  MdListModule,
  MdChipsModule,
  MdIconModule,
  MdCardModule,
  MdMenuModule,
  MdSlideToggleModule,
  MdPaginatorModule,
  MdGridListModule,
  MdInputModule,
  MdButtonModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {adminExperienceRoutes} from "./admin-experience.routes";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdListModule,
    MdChipsModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdPaginatorModule,
    MdInputModule,
    FlexLayoutModule,
    RouterModule.forChild(adminExperienceRoutes)
  ],
  declarations: [AdminExperienceListComponent]
})
export class AdminExperienceModule {
}
