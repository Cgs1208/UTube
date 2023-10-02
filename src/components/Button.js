import React from "react";

function Button({ name }) {
  return (
    <button className="px-3 py-1 mx-2 my-4 rounded-lg border bg-gray-200 hover:bg-gray-400">
      {name}
    </button>
  );
}

export default Button;
