import { Component, OnInit, Input } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "cdk-drag-drop-sorting-example",
  templateUrl: "drop-list.component.html",
  styleUrls: ["drop-list.component.css"]
})
export class DropListComponent {
  //to recieve data from parent using @input in array of objects from app component
  @Input("persones") personsArray;

  constructor() {}

  ngOnInit() {}

  addPersons = function() {
    this.personsArray.push(this.childMessage);
    console.log("l data hna : " + this.personsArray.name);
  };

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.personsArray, event.previousIndex, event.currentIndex);
  }
}
