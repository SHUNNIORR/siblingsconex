import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {

  @Input() recharging!: EventEmitter<any>;


  constructor() {
  }

  ngOnInit(): void {
    this.recharging.subscribe(() => this.triggerTwo())
  }

  triggerTwo(){
    console.log('triggerTwo')
    alert("ChildTwoComponent");
  }
}
