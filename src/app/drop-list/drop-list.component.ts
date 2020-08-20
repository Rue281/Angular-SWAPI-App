import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "cdk-drag-drop-sorting-example",
  templateUrl: "drop-list.component.html",
  styleUrls: ["drop-list.component.css"]
})
export class DropListComponent implements OnChanges{
  //to recieve data from parent using @input in array of objects from app component
  @Input("person") InputPerson: any;

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    let currentInputValue = changes.InputPerson.currentValue;
    if(currentInputValue){
      this.personsArray1.push(currentInputValue);
      console.log("Input changes");
      console.log(changes.InputPerson.currentValue);
      console.log(this.personsArray1);
    }
  }
  personsArray1 = []; //{name: "Remonda", height: "4", homeworld: "Earth"}
  constructor() {}

  ngOnInit() {}

  // addPersons = function() {
  //   this.personsArray.push(this.childMessage);
  //   console.log("l data hna : " + this.personsArray.name);
  // };

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.personsArray1, event.previousIndex, event.currentIndex);
  }

  // sendPerson(person: any)
  // {
  //   console.log("Called from sendPersons");
  //   console.log(person);
  //   this.personsArray1.push(person);
  // }
}
