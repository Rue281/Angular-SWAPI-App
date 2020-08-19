import { Component, OnInit, Input } from "@angular/core";
import { SwapiService } from "./services/swapi.service.js";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "SWAPI App";
  searchForm: FormGroup;

  //regular exp for numric values
  numericRegex = /^(\d+\d)$|^(\d+)$/;
  submitted = false;

  //TODO:
  //test if user typed text  or number
  personId: number;

  // personsArray = [];

  //TODO: check if the array goes with object not empty
  //to send person data from parent to drop-list component using input decorator
  persons = [];

  constructor(
    private service: SwapiService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    //instantiate searchForm
    this.searchForm = this.formBuilder.group({
      idInputField: [
        "",
        [
          Validators.compose([
            Validators.required,
            Validators.pattern(this.numericRegex),
            Validators.min(1),
            Validators.max(83)
          ])
        ]
      ]
    });
  }

  // convenience getter for easy access to "idInputField" form-field
  get f() {
    console.log("input value: " + this.searchForm.controls);
    return this.searchForm.controls;
    // return this.searchForm.get("idInputField").value;
  }

  //handle search button

  //TODO:
  //put required on text field to submit search
  //{{Test}}check if user write text or number..if number it should be less than no. of people
  //input should be required and valid
  //change method name to searchButtonHandler
  //catch error
  onSearch() {
    // if form is valid do seearch
    if (this.searchForm.valid) {
      // this.personId = id;
      this.personId = this.searchForm.get("idInputField").value;

      // console.log("ID is: " + this.personId);

      this.service.swapiModule.getPerson(this.personId, value => {
        //TODO: TEst if person object is returned from API & not empty
        let person: any = {
          name: value.name,
          height: value.height,
          homeWorld: value.homeworld
        };

        //TODO: Test if persons array is not empty
        //loop with person{} on the persons array..if person already there don't push
        //add object into persons array
        this.persons.push(person);

        // console.log(
        //   "his name: " +
        //     person.name +
        //     " his height: " +
        //     person.height +
        //     " his homeworld " +
        //     person.homeWorld
        // );
      });
      //this.submitted = true;
    }
  }
}
