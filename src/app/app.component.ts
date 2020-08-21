import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SWAPI App';

  personId: number;

  // personsArray = [];

  // TODO: check if the array recieved not empty
  // to recieve data from form component

  persons = [];
  personFromFormComponent: any;

  constructor() {}
  ngOnInit() {}

  // send the recieved person from form component to drop-list component
  sendPerson(person: any) {
    console.log('From child to parent');
    console.log(person);
    this.personFromFormComponent = person;
  }
}
