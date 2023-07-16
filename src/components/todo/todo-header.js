
function TodoHeader(props){

    return (
        <div className="header">
            <h1>Todo Application</h1>
            <div className="todo-content">
                <p>
                    Completed: {props.completedTodos}/{props.allTodos}
                </p>
            </div>
        </div>
    );
}

export default TodoHeader;