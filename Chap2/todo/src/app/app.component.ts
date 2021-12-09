import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'todo';
  showComplete: boolean = false;

  private list = new TodoList('Ash', [
    new TodoItem('Informatique', true),
    new TodoItem('Faire son jogging'),
    new TodoItem('Faire des courses'),
  ]);

  get userName(): string {
    return this.list.user;
  }

  get itemsCount(): number {
    return this.items.length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter( item => this.showComplete || !item.complete );
  }

  addItem(task: any) {
    if(task != ""){
      this.list.addItem(task);
    }
  }

}
