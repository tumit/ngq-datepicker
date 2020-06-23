import "bootstrap-datepicker";

import {
  AfterViewInit,
  Component,
  forwardRef,
  Input,
  ViewChild,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const BASE_OPTION = {
  autoclose: true,
  format: "dd/mm/yyyy",
  language: "en-GB",
} as DatepickerOptions;
export const th_TH = { ...BASE_OPTION, language: "th-TH" } as DatepickerOptions;
export const en_GB = { ...BASE_OPTION, language: "en-GB" } as DatepickerOptions;

const NGQ_DATETIME_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgqDatepickerComponent),
  multi: true,
};

@Component({
  selector: "ngq-datepicker",
  templateUrl: "./ngq-datepicker.component.html",
  styleUrls: ["./ngq-datepicker.component.css"],
  providers: [NGQ_DATETIME_VALUE_ACCESSOR],
})
export class NgqDatepickerComponent
  implements ControlValueAccessor, AfterViewInit {
  @Input() hideIcon: false;
  @Input() id: string;
  @Input() class: string;
  @Input() placeholder: string;

  @ViewChild("input", { static: false }) input;

  _jQueryElement: JQuery;
  _value: number;
  _isDisabled: boolean;
  _opts: DatepickerOptions;

  constructor() {}

  // should re-initial datepicker when assign new options
  @Input("opts")
  set opts(opts: DatepickerOptions) {
    this._opts = opts;
    if (this._jQueryElement) {
      this._jQueryElement.datepicker("destroy");
      const newVal = !!this._value
        ? new Intl.DateTimeFormat(this._opts.language).format(this._value)
        : "";
      this._jQueryElement.val(newVal);
      this.initDatepicker();
    }
  }

  ngAfterViewInit() {
    this._jQueryElement = jQuery(this.input.nativeElement);
    this.initDatepicker();
  }

  private initDatepicker() {
    this._opts = this._opts ? this._opts : th_TH;
    this._jQueryElement.datepicker(this._opts);
    this._jQueryElement.datepicker().on("changeDate", (e: any) => {
      this._value = e.date;
      this.propagateChange(this._value);
    });

    this._jQueryElement.datepicker(
      "update",
      this._value ? new Date(Number(this._value)) : null
    );
    this._jQueryElement.prop("disabled", this._isDisabled);
  }

  onChange(value: string) {
    if (!value) {
      this._value = null;
      this.propagateChange(this._value);
    } else {
      if (this._jQueryElement) {
        this._jQueryElement.datepicker("destroy");
        this.initDatepicker();
      }
    }
  }

  propagateChange = (_) => {};

  writeValue(obj: any): void {
    this._value = obj;
    if (this._jQueryElement) {
      console.log(this._value);
      this._jQueryElement.datepicker(
        "update",
        this._value ? new Date(Number(this._value)) : null
      );
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
    if (this._jQueryElement) {
      this._jQueryElement.prop("disabled", this._isDisabled);
    }
  }
}
