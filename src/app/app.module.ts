import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgqDatepickerModule } from './modules/ngq-datepicker/ngq-datepicker.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgqDatepickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
