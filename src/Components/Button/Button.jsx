import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="border px-3 py-1.5 hover:bg-blue-400 bg-blue-200 rounded"
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
