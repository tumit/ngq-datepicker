# NgqDatepicker

เป็นโปรเจคทดลองสร้าง datepicker component สำหรับ Angular project โดยลอก concept มาจาก ng2-datetime

## Usage

* `npm install --save ngq-datepicker`
* add JQuery and Bootstrap Datepicker style & scripts to `.angular-cli.json`

```
  ...
  "styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css",
    "styles.css"
  ],
  "scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
    "../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.th.min.js"
  ],
  ...
```

* Add NgqDatepickerModule to your app module's

```
  import { NgqDatepickerModule } from './modules/ngq-datepicker/ngq-datepicker.module';

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgqDatepickerModule],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
```

## Reactive Form Example

* `app.component.ts`: create FormGroup

```
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
      const myDate = new Date(1981, 4, 2);
      this.fg = new FormGroup({
        birthDate: new FormControl(myDate)
      });
    }
  }
```

* `app.component.html`: add `<ngq-datepicker>` to template

```
  <div class="panel panel-default">
    <div class="panel-heading">Input form</div>
    <div class="panel-body">
      <form class="form-horizontal" role="form" [formGroup]="fg">
        <div class="form-group">
          <label for="birthDate" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-4">
            <ngq-datepicker [inputId]="'birthDate'" [inputClass]="'form-control'" formControlName="birthDate"></ngq-datepicker>
          </div>
        </div>
      </form>
    </div>
  </div>
  <br>
  {{ fg.value | json }} {{ fg.get('birthDate').value | date :'short'}}
```

## Dependencies (for development)

* `npm install jquery --save`
* `npm install @types/jquery --save`
* `npm install bootstrap-datepicker --save`
* `npm install @types/bootstrap-datepicker --save`
