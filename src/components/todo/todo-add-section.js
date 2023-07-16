import {IoMdAdd} from "react-icons/io";
import {useState} from "react";

function TodoAddSection(props){

    const [inputValue, setInputValue] = useState("");

    return (
        <div className="input mt-1">
            <input
                placeholder="add a todo..."
                type="text"
                value={inputValue}
                onKeyDown={(e) => e.key === "Enter" ? addTodo() : ""}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTodo}>
                <IoMdAdd />
            </button>
        </div>
    )

    function addTodo(){
        props.addToDo(inputValue);
        setInputValue("");
    }
}
export default TodoAddSection;