import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'ngq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngq';
  fg: FormGroup;

  ngOnInit() {
    const today = new Date(1981, 4, 2);
    this.fg = new FormGroup({
      dateFrom: new FormControl(today)
    });
  }
}
