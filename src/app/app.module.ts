import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ListModule } from './components/list/list.module';
import { FormsModule } from '@angular/forms';
// import { RamFilterPipe } from './pipes/ram-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    // RamFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
