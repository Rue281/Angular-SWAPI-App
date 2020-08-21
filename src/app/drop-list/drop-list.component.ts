import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: "cdk-drag-drop-sorting-example",
  templateUrl: 'drop-list.component.html',
  styleUrls: ['drop-list.component.css']
})
export class DropListComponent implements OnChanges {

  // to recieve data from parent using input decorator from app component
  @Input('person') InputPerson: any;

  personsArray1 = [];

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    let currentInputValue = changes.InputPerson.currentValue;

    if (currentInputValue) {
      this.personsArray1.push(currentInputValue);
      console.log('Input changes');
      console.log(changes.InputPerson.currentValue);
      console.log(this.personsArray1);
    }
  }
  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.personsArray1, event.previousIndex, event.currentIndex);
  }
}
