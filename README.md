# NgqDatepicker

เป็นโปรเจคทดลองสร้าง datepicker component สำหรับ Angular project โดยลอก concept มาจาก ng2-datetime

## Dependencies

* `npm install jquery --save`
* `npm install @types/jquery --save`
* `npm install bootstrap-datepicker --save`
* `npm install @types/bootstrap-datepicker --save`

## Installation

* `npm install --save ngq-datepicker`
* add JQuery and Bootstrap Datepicker scripts to `.angular-cli.json`

```
  ...
  "scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
    "../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.th.min.js"
  ],
  ...
```

* Add style sheet of Bootstrap
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

* Add `<ngq-datepicker></ngq-datepicker>` to your component
