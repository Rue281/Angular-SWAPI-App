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

  swapiObj = {};

  // to send person data from parent to drop-list component using input decorator
  @Output() childToParent = new EventEmitter<any>();

  persons = [];
  submitted = false;

  // if th form is valid
  // value:any
  onSubmit(form) {
    // console.log('Form Submitted!', form.personId);
    if (form.valid) {
      this.submitted = true;
      let personId = form.value['personId'];
      console.log('Form Submitted! personId= ', personId);
      //this.swapiForm = form.value;
      //console.log('Form Submitted! swapiFrom= ', this.swapiObj);

      // console.log('Form Submitted!yyy', JSON.stringify(this.swapiForm).valueOf());
      // this.personId = swapiForm;
      this.service.swapiModule.getPerson(personId, value => {
        //TODO: TEst if person object is returned from API & not empty
        const person: any = {
          name: value.name,
          height: value.height,
          homeWorld: value.homeworld
        };
        //TODO: Test if persons array is not empty
        //loop with person{} on the persons array..if person already there don't push
        //add object into persons array
        this.persons.push(person);
          console.log(
          "his name: " +
            person.name +
            " his height: " +
            person.height +
            " his homeworld " +
            person.homeWorld
        );
        //this.droplist.sendPerson(person);
        this.childToParent.emit(person);
      });
      
      
    }
  }


  //swapiForm: FormGroup;
  // TODO: check if the array goes with object not empty
  // to send person data from parent to drop-list component using input decorator
  // TODO:
  // test if user typed text  or number
  personId: number;

  // onSearch() {
  //   // if th form is valid
  //   if (this.swapiForm.valid) {
  //     // this.personId = id;
  //     this.personId = this.swapiForm.get("personId").value;

  //     // console.log("ID is: " + this.personId);

  //     this.service.swapiModule.getPerson(this.personId, value => {
  //       //TODO: TEst if person object is returned from API & not empty
  //       let person: any = {
  //         name: value.name,
  //         height: value.height,
  //         homeWorld: value.homeworld
  //       };

  //       //TODO: Test if persons array is not empty
  //       //loop with person{} on the persons array..if person already there don't push
  //       //add object into persons array
  //       this.persons.push(person);

  //       // console.log(
  //       //   "his name: " +
  //       //     person.name +
  //       //     " his height: " +
  //       //     person.height +
  //       //     " his homeworld " +
  //       //     person.homeWorld
  //       // );
  //     });
  //     //this.submitted = true;
  //   }
  // }
  constructor( private service: SwapiService) { }

  ngOnInit() {

  }
}
