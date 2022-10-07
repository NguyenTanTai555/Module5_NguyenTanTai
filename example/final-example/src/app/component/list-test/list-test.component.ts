import {Component, OnInit} from '@angular/core';
import {Test} from "../../model/test";
import {TestService} from "../../service/test.service";
import {Router} from "@angular/router";
import {Category} from "../../model/category";

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
  tests: Test[] = [];
  categories: Category[] = []
  // @ts-ignore
  testDelete: Test = {};

  constructor(private testService: TestService,
              private router: Router) {
    this.testService.getCategory().subscribe(next => {
      this.categories = next;
    })
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.testService.getAll().subscribe(test => {
      // @ts-ignore
      this.tests = test;
    })
  }
}
