import { Param } from '@nestjs/common';
import { Body, Controller , Get , Post } from '@nestjs/common';
import { Todo } from 'src/interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService){}
    @Get()
    findAll(): Todo[]{
        return this.todoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        console.log('id',id);
        return this.todoService.findOne(id);
    }

    @Post()
    createTodo(@Body() newTodo:CreateTodoDto){
        console.log('newTodo',newTodo);
        this.todoService.create(newTodo);
    }
}
