import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { NgqDatepickerComponent, th_TH, en_GB } from './modules/ngq-datepicker/ngq-datepicker.component';

@Component({
  selector: 'ngq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngq';
  fg: FormGroup;

  opts = th_TH;

  ngOnInit() {
    const myDate = new Date(1981, 4, 2);
    this.fg = new FormGroup({
      dateFrom: new FormControl(myDate),
      dateTo: new FormControl(myDate)
    });
  }

  changeLang() {
    if (this.opts.language === 'th-TH') {
      this.opts = en_GB;
    } else {
      this.opts = th_TH;
    }
  }
}
