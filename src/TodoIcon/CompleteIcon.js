import React from "react";
import {TodoIcon} from "./";

function CompleteIcon({completed, onComplete}) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "#27AE60" : "rgba(242, 242, 242, 0.5)"}
      onClick={onComplete}
    />
  );
}

export {CompleteIcon};