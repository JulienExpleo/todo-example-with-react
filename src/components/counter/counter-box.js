import {useState} from "react";

export function CounterBox(props){

    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("");

    return (
        <div className="text-center mt-1">
            <h5>
                Counter is : {counter}
            </h5>
            <div className="mt-1">
                <button onClick={() => fetchApiData()}>
                    Increase the count
                </button>
            </div>
            <div className="mt-1">
                {text}
            </div>
        </div>
    )

    function fetchApiData(){
        let url = "https://jsonplaceholder.typicode.com/todos/1";

        fetch(url).then((response) => {
            return response.json();
        }).then((response) => {
            setText(response.title)
        })

    }
}