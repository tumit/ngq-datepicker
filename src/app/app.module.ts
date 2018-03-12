import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgqDatepickerModule } from '../../public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgqDatepickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
