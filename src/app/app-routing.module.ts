import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CloudListComponent} from "./components/cloud-list/cloud-list.component";
import {AddCloudVendorComponent} from "./components/add-cloud-vendor-dialog/add-cloud-vendor.component";
import {CloudDetailsComponent} from "./components/cloud-details/cloud-details.component";

const routes: Routes = [
  {path: '', redirectTo: '/cloud-list', pathMatch: 'full'},
  {path: 'cloud-list', component: CloudListComponent},
  {path: 'add', component: AddCloudVendorComponent},
  {path: 'cloud-details/:id', component: CloudDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
