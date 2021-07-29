import { Injectable } from '@nestjs/common';
import { Todo } from 'src/interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
    todos: Todo[]=[
        {
            id:1,
            titre:"task1",
            description:"task",
            done:false
        }
        ,
        {
            id:2,
            titre:"task2",
            description:"task",
            done:true
        }
        ,
        {
            id:3,
            titre:"task3",
            description:"task",
            done:false
        }
        ,
        {
            id:4,
            titre:"task4",
            description:"task",
            done: true
        }

    ];

    findAll(): Todo[]{
        return this.todos;
    }

    findOne(id: string){
        return this.todos.find(todo => (todo.id === Number(id)));
    }

    create(todo:CreateTodoDto){
        this.todos=[...this.todos,todo];
    }
}
