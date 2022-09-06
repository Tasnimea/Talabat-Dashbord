import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {AngularFireModule} from '@angular/fire';
import { AngularFireModule } from "@angular/fire/compat";
// import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

// import {AngularFireModule} from '@angular/fire';
// import {AngularFireDatabaseModule} from '@angular/fire/database';
import  { environment } from '../environments/environment';
// import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {CrudService} from './service/crud.service';
import { ShowRestrentsComponent } from './components/show-restrents/show-restrents.component';
import { AddRestrantsComponent } from './components/add-restrants/add-restrants.component';
import { SearchFilterPipe } from './Pipe/search-filter.pipe';
import { AsideComponent } from './components/aside/aside.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RecentOrdersComponent } from './components/recent-orders/recent-orders.component';
import { SalesComponent } from './components/sales/sales.component';
import { SalesAnalyticsComponent } from './components/sales-analytics/sales-analytics.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayRestrantComponent } from './components/display-restrant/display-restrant.component';
import { TestComponent } from './components/test/test.component';

import { AdminComponent } from './components/admin/admin.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';




@NgModule({
  declarations: [
    AppComponent,
    ShowRestrentsComponent,
    AddRestrantsComponent,
    SearchFilterPipe,
    AsideComponent,
    DashboardComponent,
    OrdersComponent,
    RecentOrdersComponent,
    SalesComponent,
    SalesAnalyticsComponent,
    ShowDataComponent,
    DisplayRestrantComponent,
    TestComponent,
    AdminComponent,
    AdminLoginComponent,

    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FontAwesomeModule,
    AngularFireStorageModule,
    AngularFireAuthModule,

  ],
  providers: [CrudService,
  { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],

  bootstrap: [AppComponent]
})
export class AppModule { }



