export class CreateTodoDto{
    id: number;
    titre: string;
    description?: string;
    done: boolean;
}