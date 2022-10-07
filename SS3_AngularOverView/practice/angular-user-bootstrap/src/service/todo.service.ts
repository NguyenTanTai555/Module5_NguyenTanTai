import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import {Observable} from 'rxjs';
import {Todo} from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getAll(): Observable<Todo> {
    return this.httpClient.get('http://localhost:3000/todo');
  }

  findById(id: number): Observable<Todo> {
    return this.httpClient.get('http://localhost:3000/todo/' + id);
  }

  saveTodo(todo): Observable<Todo> {
    return this.httpClient.post('http://localhost:3000/todo', todo);
  }

  updateTodo(id: number, todo: Todo): Observable<Todo> {
    return this.httpClient.put('http://localhost:3000/todo' + id, todo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/todo/' + id);
  }

  constructor(private httpClient: HttpClient) {
  }
}
