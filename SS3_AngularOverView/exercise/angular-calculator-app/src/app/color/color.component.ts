import {Component, OnInit} from '@angular/core';
import {Color} from "../../model/Color";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: Color = {
    id: 1,
    color: "#FF0000"
  }

  changeColor(value: any) {
    this.color.color = value.value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
