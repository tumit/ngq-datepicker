import { AfterViewInit, Component, forwardRef, HostBinding, HostListener, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import 'bootstrap-datepicker';

const BASE_OPTION = { autoclose: true, format: 'dd/mm/yyyy' };
const THAI_OPTION = { ...BASE_OPTION, thaiyear: true };

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

  @ViewChild('input') input;

  _datepicker: any;
  _date: Date;
  _isDisabled: boolean;

  constructor() { }

  propagateChange = _ => { };
  @HostListener('blur') onTouched = () => { };

  @HostBinding('attr.tabindex')
  get tabindexAttr(): string | undefined {
    return this.tabindex === undefined ? '-1' : undefined;
  }

  ngAfterViewInit() {
    jQuery(this.input.nativeElement).datepicker(THAI_OPTION);
    jQuery(this.input.nativeElement)
      .datepicker()
      .on('changeDate', (e: any) => {
        this._date = e.date;
        this.propagateChange(this._date);
      });
    jQuery(this.input.nativeElement).datepicker('update', this._date);
  }

  writeValue(obj: any): void {
    this._date = obj;
    jQuery(this.input.nativeElement).val(obj);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void {
    jQuery(this.input.nativeElement).prop('disabled', isDisabled);
  }
}
