import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { DataTableModule } from 'angular-6-datatable';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddListComponent } from './add-list/add-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';
import { DeleteListComponent } from './delete-list/delete-list.component';
import { DataPassService } from './service/data-pass.service';

const appRoutes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
  },{
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'addList',
        component: AddListComponent
    },{
        path: 'deleteList',
        component: DeleteListComponent
    }]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddListComponent,
    DeleteListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    DataTableModule,
    LocalStorageModule.withConfig({
      prefix: 'app-root',
      storageType: 'localStorage'
    }),
    RouterModule.forRoot(
      appRoutes// <-- debugging purposes only
    )
  ],
  providers: [DataPassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
