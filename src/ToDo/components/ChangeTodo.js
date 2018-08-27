import React from "react";

export const ChangeTodo = ({
  valueText,
  handleChangeTodo,
  handleSubmitTodo,
  newValue
}) => {
  return valueText ? (
    <form onSubmit={handleSubmitTodo}>
      <input
        type="text"
        defaultValue={valueText}
        value={newValue}
        onChange={handleChangeTodo}
      />
      <button>Save</button>
    </form>
  ) : null;
};
