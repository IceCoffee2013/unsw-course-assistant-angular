import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminUserListComponent} from "./admin-user-list/admin-user-list.component";
import {adminUserRoutes} from "./admin-user.routes";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MdInputModule,
  MdPaginatorModule,
  MdGridListModule,
  MdSlideToggleModule,
  MdMenuModule,
  MdCardModule,
  MdButtonModule,
  MdIconModule,
  MdChipsModule,
  MdListModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";

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
    RouterModule.forChild(adminUserRoutes)
  ],
  declarations: [AdminUserListComponent]
})
export class AdminUserModule {
}
