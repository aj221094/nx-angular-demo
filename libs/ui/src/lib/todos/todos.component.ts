import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@ajnxt1/data';

@Component({
  selector: 'ajnxt1-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}
}
