import {FiDelete} from "react-icons/fi";

function TodoItem(props){
    return (
        <li key={props.index}>
                        <span className={props.todo.completed ? "completed" : ""}>
                          <input
                              id="checkbox"
                              type="checkbox"
                              checked={props.todo.completed}
                              onChange={(e) => props.toggleTodo(props.todo.text, e.target.checked)}
                          />
                            {props.todo.text}
                        </span>
            <button
                className="danger"
                onClick={() => props.handleDeleteTodo(props.todo.text)}
            >
                <FiDelete />
            </button>
        </li>
    );
};

export default TodoItem;