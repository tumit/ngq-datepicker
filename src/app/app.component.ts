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
  date1 = new FormControl({ value: '1533229200000', disabled: true});
  date2 = new FormControl(new Date());
  date3 = new FormControl();

  opts = th_TH;

  ngOnInit() {
    this.fg = new FormGroup({
      date1: this.date1,
      date2: this.date2,
      date3: this.date3
    });
  }

  changeLang() {
    if (this.opts.language === 'th-TH') {
      this.opts = en_GB;
    } else {
      this.opts = th_TH;
    }
  }

  toggleEnableDisable() {
    (this.date1.enabled)
      ? this.date1.disable()
      : this.date1.enable();
  }

  update() {
    this.fg.get('date1').setValue(new Date());
    this.fg.get('date2').setValue('');
    this.fg.get('date3').setValue('1533229200000');
  }

  reset() {
    this.fg.reset();
  }
}
