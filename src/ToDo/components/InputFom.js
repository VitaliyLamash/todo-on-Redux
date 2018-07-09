import React from "react";

export const InputForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.value} onChange={props.handleChange} />
      <button>Save</button>
    </form>
  );
};
