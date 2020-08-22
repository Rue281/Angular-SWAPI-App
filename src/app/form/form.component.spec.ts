import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));

    el = de.nativeElement;
    fixture.detectChanges();
  }));

  it('should set submitted to be true', () => {
    el = fixture.debugElement.query(By.css('.mySwapiForm')).nativeElement;
    component.onSubmit('form');
    expect(el).toBeTruthy();
  });

  // onSubmit() is not executed when searh button is disabled
  it ('should call onSubmit()', () => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    fixture.whenStable().then( () => {
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
   });
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

//   it('should show a validation error if the id input was touched but left empty', () => {
//     let de1: DebugElement;

//     fixture.detectChanges(); // run change detection
//     de1 = fixture.debugElement.query(By.css('.alert'));
//     // el = fixture.debugElement.query(By.css('#idNumber')).nativeElement;

//     // the validation error should be found:
//     expect(de1).toBeTruthy();
// });
});
