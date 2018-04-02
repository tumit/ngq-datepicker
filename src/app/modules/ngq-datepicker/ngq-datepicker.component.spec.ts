import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgqDatepickerComponent } from './ngq-datepicker.component';

describe('NgqDatepickerComponent', () => {
  let component: NgqDatepickerComponent;
  let fixture: ComponentFixture<NgqDatepickerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NgqDatepickerComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgqDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should be 1981-05-02 when input 02/05/1981', () => {
  //   const ne = fixture.debugElement.nativeElement;
  //   const input: HTMLInputElement = ne.querySelector('input');

  //   console.log('init value: start');

  //   const inputValue = '02/05/1981';

  //   for (const key of inputValue) {
  //     console.log('key', key);
  //     input.focus();
  //     const event = new KeyboardEvent('keypress', { key });
  //     input.dispatchEvent(event);
  //     fixture.detectChanges();
  //   }

  //   // input.dispatchEvent(new Event('input'));
  //   //
  //   console.log('init value: end');

  //   console.log('component._date', component._date);
  // });
});
