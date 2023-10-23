import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AddCloudVendorComponent} from './components/add-cloud-vendor-dialog/add-cloud-vendor.component';
import {CloudDetailsComponent} from './components/cloud-details/cloud-details.component';
import {CloudListComponent} from './components/cloud-list/cloud-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ExampleInterceptorInterceptor} from "./example-interceptor.interceptor";
import { MenuComponent } from './shared/cons/navigation/menu/menu.component';
import { FilterPipe } from './shared/pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddCloudVendorComponent,
    CloudDetailsComponent,
    CloudListComponent,
    MenuComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptorInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
