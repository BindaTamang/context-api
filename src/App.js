
import './App.css';
import TodoList from './Components/TodoList';
import AddTodoList from './Components/AddTodoList';
import { TodoProvider } from './Contexts/TodoList';

function App() {
  return (
   <TodoProvider>
    <div className='App'>
      <h1>Todo App</h1>
      <AddTodoList/>
      <TodoList/>
    </div>
   </TodoProvider>
  );
}

export default App;
