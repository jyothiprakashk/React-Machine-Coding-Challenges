import React from "react";

const HOCLoggerAndLoading = (WrappedComponent) => {
  return function EnhancedWrappedComponent(props) {
    console.log(props);

    // It is common where ever we need loader hoc is used to give extra functionality to component
    if (props.isLoading) {
      return <div>Component is Loading</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default HOCLoggerAndLoading;
