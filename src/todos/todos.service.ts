import { NotFoundException } from '@nestjs/common';
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

    update(id: string , todo: Todo){
        //on recupere le todo a modifier
        const todoToUpdate = this.todos.find(todo => (todo.id === +id));
        //on teste son exixtance
        if(!todoToUpdate){
            return new NotFoundException('this todo is not found');
        }

        //on effwctue nos affectations
        if(todo.hasOwnProperty('done')){
            todoToUpdate.done = todo.done;
        }

        if(todo.titre){
            todoToUpdate.titre = todo.titre;
        }

        if(todo.description){
            todoToUpdate.description = todo.description;
        }

        //on cree une cpie du tableau en changeant la nouvelle valeur du todo en question.
        const updatedTodoes = this.todos.map(t => t.id !== +id ? t : todoToUpdate);
        //on modifie dans notre tableau todos
        this.todos=[...updatedTodoes]
        //on retourne le todo modifie
        return {updatedTodo:1, todo: todoToUpdate};
    }
}
