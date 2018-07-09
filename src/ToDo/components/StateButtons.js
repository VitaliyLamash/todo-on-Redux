import React from "react";

export const StateButtons = (props) => {
  return (
    <div>
      <button onClick={() => props.hanleShow('all')}>Show All</button>
      <button onClick={() => props.hanleShow('checked')}>Show Checked</button>
    </div>
  );
};
