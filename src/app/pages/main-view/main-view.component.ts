import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from "src/models/board.model";
import { Column } from "src/models/column.model";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  constructor() {}

  board: Board = new Board('Test Board', [
    new Column('Tasks', [
      'Some random task to do',
      'This is another random task',
      'Find out how to build an awesome application'
    ]),
    new Column('Research', [
      'Now try out a new restaurant',
      'Make breakfast before the workout',
      'Being the awesome application'
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go Home',
      'Fall asleep'
    ]),
    new Column('Done', ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']),
  ]);

  ngOnInit(): void {
    
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
