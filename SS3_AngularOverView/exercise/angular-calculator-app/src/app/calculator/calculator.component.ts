import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  private numberA: number;
  private numberB: number;
  private operator: string;

  MyCalculator(numberA, numberB, operator: string) {
    switch (operator) {
      case "+" :
        return numberA + numberB;
        break;
      case "-":
        return numberA - numberB;
        break;
      case "*":
        return numberA * numberB;
        break;
      case "/":
        return numberA / numberB;
        break;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
