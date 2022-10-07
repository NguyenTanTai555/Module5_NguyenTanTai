import {Component, OnInit} from '@angular/core';
import {Todo} from '../../../model/todo';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../../../service/todo.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  todos: Todo[] = [];
  id: number;
  todoDelete: Todo = {};


  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getTodo(this.id);
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getTodo(id: number) {
    return this.todoService.findById(id).subscribe(todo => {
      this.todoForm = new FormGroup({
        id: new FormControl(todo.id),
        content: new FormControl(todo.content),
        complete: new FormControl(todo.complete)
      });
    });
  }

  getAll() {
    this.todoService.getAll().subscribe(todo => {
      // @ts-ignore
      this.todos = todo;
    });
  }

  toggleTodo(i: number) {
    return this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.todoForm.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      return this.todoService.saveTodo(todo).subscribe(() => {
        this.getAll();
      }, e => {
        console.log(e);
      });
    }

  }

  editTodo(id: number) {
    const todo = this.todoForm.value;
    this.todoService.updateTodo(id, todo).subscribe(() => {
      alert('Cập nhật thành công');
      this.getAll();
    }, e => {
      console.log(e);
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      alert('Xóa thành công');
      this.getAll();
    }, e => {
      console.log(e);
    });
  }

  getInfoToModal(todo: Todo) {
    this.todoDelete = todo;
  }
}
