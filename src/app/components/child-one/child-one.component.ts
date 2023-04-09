import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  @Output() rechargingList = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  trigger(event: any): void {
    this.rechargingList.emit();
    console.log(event)
  }

}
