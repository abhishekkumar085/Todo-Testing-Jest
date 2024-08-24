import { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';


import TodoContainer from './Components/Todo/TodoContainer';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full h-screen flex justify-center items-center gap-20">
      <div className="flex justify-center gap-5 w-[10rem] h-[10rem] flex-col items-center bg-gray-50">
        <p className="bg-white">{count}</p>
        <div>
          <Button onClick={() => setCount(count + 1)}>Click here</Button>
        </div>
      </div>
      <TodoContainer />
    </div>
  );
}

export default App;
