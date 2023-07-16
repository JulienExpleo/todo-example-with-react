import TodoItem from "./todo-item";

function TodoList(props){
    return (
        <>
            {props.todos.map((todo, index) => {
                return <TodoItem index={index} todo={todo}
                                 toggleTodo={(todo, e) => props.toggleTodo(todo,e)}
                                 handleDeleteTodo={(todo) => props.handleDeleteTodo(todo)}/>
            })}
        </>
    );
};

export default TodoList;