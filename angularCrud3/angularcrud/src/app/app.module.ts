import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudAddComponent } from './components/crud-add/crud-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudGetComponent } from './components/crud-get/crud-get.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudAddComponent,
    CrudGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
