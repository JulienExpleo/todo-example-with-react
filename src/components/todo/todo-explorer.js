import {useState} from "react";
import TodoHeader from "./todo-header";
import TodoList from "./todo-list";
import EmptyTodoText from "./empty-todo-text";
import TodoAddSection from "./todo-add-section";

function TodoExplorer(){

            const [todos, setTodos] = useState([]);

            //Prevent adding if input is empty
            //Update todos state with new added item
            function addToDo(inputValue){

                if (inputValue.trim() === "") {
                    return;
                }

                setTodos((currentTodos) => {
                    return [
                        ...currentTodos,
                        { text: inputValue, completed: false },
                    ];
                });
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
            const completedTodos = todos ? todos.filter((todo) => todo.completed !== false) : [];

            return (
                <div id="todoList" className="mt-1">

                    <TodoHeader completedTodos={completedTodos.length} allTodos={todos.length} />

                    <TodoAddSection addToDo={(inputValue) => addToDo(inputValue)}/>
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