import React from 'react';
import { PiNotePencilBold } from 'react-icons/pi';
import { MdDeleteForever } from 'react-icons/md';
import Button from '../Button/Button';
const Todo = ({
  todo,
  setTodo,
  handleSaveTodo,
  saveTodo,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="">
      <div>
        <input
          type="text"
          value={todo}
          placeholder="Add Todo"
          className="px-2 py-1.5 border "
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>

      <div className="text-center  mt-4">
        <Button onClick={handleSaveTodo}>Add Todo</Button>
      </div>

      <ul className="mt-4">
        {saveTodo &&
          saveTodo.map((item, index) => (
            <li key={index} className="border-b py-2">
              <div className="flex items-center justify-between ">
                {item.name}
                <div>
                  <button
                    className="hover:text-green-800"
                    onClick={() => handleEdit(item.id, item.name)}
                  >
                    <PiNotePencilBold className="w-[18px] h-[18px] text-green-700" />
                  </button>
                  <button
                    className="hover:text-green-800"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MdDeleteForever className="w-[18px] h-[18px] text-red-500" />
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Todo;
