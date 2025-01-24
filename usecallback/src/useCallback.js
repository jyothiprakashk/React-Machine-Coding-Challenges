import React from "react";

const SlowComponent = React.memo((props) => {
  for (let i = 0; i < 1000000000; i++) {}
  return <div onClick={props.handleClick}>Click Me</div>;
});

export default SlowComponent;
