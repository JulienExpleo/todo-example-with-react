
function TodoHeader(props){
    return (
        <header>
            <h1>Todo tracking Application</h1>
            <div className="todo-content">
                <p>
                    Completed: {props.completedTodos}/{props.allTodos}
                </p>
            </div>
        </header>
    );
};

export default TodoHeader;