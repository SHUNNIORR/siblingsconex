import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  recharge= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
