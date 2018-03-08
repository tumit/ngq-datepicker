import { AfterViewInit, Component, forwardRef, HostBinding, HostListener, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import 'bootstrap-datepicker';

const BASE_OPTION = { autoclose: true, format: 'dd/mm/yyyy' };
const THAI_OPTION = { ...BASE_OPTION, language: 'th', thaiyear: true };

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
  @Input() tabindex: string;

  @Input() inputId: string;
  @Input() inputClass: string;

  @ViewChild('input') input;

  _datepicker: JQuery;
  _date: Date;
  _isDisabled: boolean;

  constructor() {}

  propagateChange = _ => {};
  @HostListener('blur') onTouched = () => {};

  @HostBinding('attr.tabindex')
  get tabindexAttr(): string | undefined {
    return this.tabindex === undefined ? '-1' : undefined;
  }

  ngAfterViewInit() {
    this._datepicker = jQuery(this.input.nativeElement).datepicker(THAI_OPTION);
    this._datepicker.datepicker('update', this._date);
    this._datepicker.prop('disabled', this._isDisabled);
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
