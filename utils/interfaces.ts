
export interface ITodo {
    id: number;
    task: string;
    status: boolean;
}

export interface TodoContextInterface {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    removeTodo: (id: number) => void;
}