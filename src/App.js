import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {useEffect, useState} from "react";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all")
    const [filterStatus, setFilterStatus] = useState([]);
    useEffect(() => {
        filterHandler();
    }, [todos, status])

    const filterHandler = () => {
        if(status === 'completed'){
            setFilterStatus(todos.filter(todo => todo.completed));
        }else if(status === 'uncompleted'){
            setFilterStatus(todos.filter(todo => !todo.completed));
        }else {
            setFilterStatus(todos)
        }
    }
  return (
    <div className="App">
     <header>
         <h1>Ed's Todo List </h1>
     </header>
        <Form
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setStatus={setStatus}
        ></Form>
        <TodoList filteredStatus={filterStatus} setTodos={setTodos} todos={todos}></TodoList>
    </div>
  );
}

export default App;
