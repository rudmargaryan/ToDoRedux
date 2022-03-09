import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoFooter } from "./components/todofooter";
import { ToDoForm } from "./components/todoform";
import { Todolist } from "./components/todolsit";
import { addtodo, GetList, loadlist } from "./redux/features/todoReducer";

function App() {
  const list = useSelector(GetList)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadlist())
  },[])
  return (
    <div className="App">
        <ToDoForm />
        <Todolist/>
        <TodoFooter/>
    </div>
  );
}

export default App;
