import React from 'react';

export default Form = (props) => {
  const onSubmitHandler = (event) => {
    props.onSubmit(event);
  };

  return (
    <form
      className={props.className}
      onSubmit={onSubmitHandler}
      action={props.action}
      method={props.method}
    >
      {props.children}
    </form>
  );
};
