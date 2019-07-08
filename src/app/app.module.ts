import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleContainerComponent } from './module-container/module-container.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import { PaginatedListComponent } from './paginated-list/paginated-list.component';
import {HttpClientModule} from '@angular/common/http';
import {AbstractDataService} from './abstract-data.service';
import {UsersDataService} from './users-data.service';
import {PortalModule} from '@angular/cdk/portal';
import { PaginatedListContainerComponent } from './paginated-list-container/paginated-list-container.component';
import { CustomListComponent } from './custom-list/custom-list.component';
import { DetailViewComponent } from './detail-view/detail-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ModuleContainerComponent,
    FilterPanelComponent,
    MasterDetailComponent,
    PaginatedListComponent,
    PaginatedListContainerComponent,
    CustomListComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PortalModule
  ],
  providers: [
    {provide: AbstractDataService, useClass: UsersDataService}
  ],
  entryComponents: [
    CustomListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
