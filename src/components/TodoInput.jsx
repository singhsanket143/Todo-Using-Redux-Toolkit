import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

function TodoInput() {

    const dispatch = useDispatch(); // this dispatch function is already connected to the store

    const [todo, setTodo] = useState('');

    function addTodoToStore() {
        dispatch(addTodo(todo));
    }

    return (
        <div>
            <input type="text" onChange={e => setTodo(e.target.value)} value={todo}/>
            <button onClick={addTodoToStore}>Add Todo ...</button>
        </div>
    )
}

export default TodoInput;