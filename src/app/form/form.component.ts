import { DropListComponent } from './../drop-list/drop-list.component';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor( private service: SwapiService) { }

  // swapiObj = {};

  // to send person data from form component to app component using output decorator
  @Output() childToParent = new EventEmitter<any>();

  persons = [];
  submitted = false;

  // TODO: check if the array goes with object not empty
  // to send person data from parent to drop-list component using input decorator
  // TODO:
  // test if user typed text  or number
  personId: number;

  // submit the form if it is valid
  onSubmit(form) {
    if (form.valid) {
      this.submitted = true;
      let personId = form.value['personId'];

      console.log('Form Submitted! personId= ', personId);

      this.service.swapiModule.getPerson(personId, value => {
        // TODO: Test if person object is returned from API & not empty
        const person: any = {
          name: value.name,
          height: value.height,
          homeWorld: value.homeworld
        };
        // TODO: Test if persons array is not empty
        // loop with person{} on the persons array..if person already there don't push
        // add object into persons array
        this.persons.push(person);
        console.log(
          'his name: ' +
            person.name +
            ' his height: ' +
            person.height +
            ' his homeworld ' +
            person.homeWorld
        );
        this.childToParent.emit(person);
      });
    }
  }

  ngOnInit() {}
}
