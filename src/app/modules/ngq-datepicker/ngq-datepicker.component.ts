import { AfterViewInit, Component, forwardRef, HostBinding, HostListener, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import 'bootstrap-datepicker';

export const BASE_OPTION = { autoclose: true, format: 'dd/mm/yyyy' } as DatepickerOptions;
export const th_TH = { ...BASE_OPTION, language: 'th-TH' } as DatepickerOptions;
export const en_GB = { ...BASE_OPTION, language: 'th-GB' } as DatepickerOptions;

const NGQ_DATETIME_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgqDatepickerComponent),
  multi: true
};

@Component({
  selector: 'ngq-datepicker',
  templateUrl: './ngq-datepicker.component.html',
  styleUrls: ['./ngq-datepicker.component.css'],
  providers: [NGQ_DATETIME_VALUE_ACCESSOR]
})
export class NgqDatepickerComponent implements ControlValueAccessor, AfterViewInit {
  @Input() hideIcon: false;
  @Input() id: string;
  @Input() class: string;
  @Input() placeholder: string;

  @ViewChild('input') input;

  _datepicker: JQuery;
  _date: Date;
  _isDisabled: boolean;
  _datePickerOptions: DatepickerOptions;

  constructor() {}

  propagateChange = _ => {};
  @HostListener('blur') onTouched = () => {};

  @Input('opts')
  set datePickerOptions(opts: DatepickerOptions) {
    this._datePickerOptions = opts;
    if (this.input) {
      // destroy old datepicker
      jQuery(this.input.nativeElement).datepicker('destroy');
      // change value in text box follow option.language
      const newVal = new Intl.DateTimeFormat(this._datePickerOptions.language).format(this._date);
      jQuery(this.input.nativeElement).val(newVal);
      // init datepicker
      this.initDatepicker();
    }
  }

  private initDatepicker() {
    if (this.input) {
      this._datepicker = jQuery(this.input.nativeElement).datepicker(this._datePickerOptions);

      this._datepicker.datepicker().on('changeDate', (e: any) => {
        this._date = e.date;
        this.propagateChange(this._date);
      });

      this._datepicker.datepicker('update', this._date);
      this._datepicker.prop('disabled', this._isDisabled);
    }
  }

  ngAfterViewInit() {
    this.initDatepicker();
  }

  writeValue(obj: any): void {
    this._date = obj;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }
}
