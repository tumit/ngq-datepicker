import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgqDatepickerModule } from '../../public_api';
import { ReactiveFormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, NgqDatepickerModule],
        declarations: [AppComponent]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
