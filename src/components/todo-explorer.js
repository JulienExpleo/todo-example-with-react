import {useState} from "react";
import {IoMdAdd} from "react-icons/io";
import TodoHeader from "./todo-header";
import TodoList from "./todo-list";
import EmptyTodoText from "./empty-todo-text";

function TodoExplorer(){

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    //Don't add if input is empty
    //Update todos state with new added item
    //Reset the input to empty value
    function addToDo(){

        if (inputValue.trim() === "") {
            return;
        }

        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                { text: inputValue, completed: false },
            ];
        });

        setInputValue("");
    }


    function deleteToDo(text){

        const updatedTodos = todos.filter((todo) => todo.text !== text);
        setTodos(updatedTodos);
    }

    //Turn the to do to the completed value provided
    function checkTodo(text, completed){

        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.text === text) {
                    return { ...todo, completed };
                }
                return todo;
            });
        });
    }

    //count the number of completed todos
    const completedTodos = todos
        ? todos.filter((todo) => todo.completed !== false)
        : [];

    return (
        <div id="todoList">
            <TodoHeader completedTodos={completedTodos.length} allTodos={todos.length} />
            <div className="input mt-1">
                <input
                    placeholder="add a todo..."
                    type="text"
                    value={inputValue}
                    onKeyDown={(e) => e.key === "Enter" ? addToDo() : ""}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={addToDo}>
                    <IoMdAdd />
                </button>
            </div>
            <ul className="mt-1">
                {todos.length === 0 && (
                    <EmptyTodoText/>
                )}
                <TodoList todos={todos}
                          toggleTodo={(todo, e) => checkTodo(todo,e)}
                          handleDeleteTodo={(todo) => deleteToDo(todo)}/>
            </ul>
        </div>
    );
}

export default TodoExplorer;