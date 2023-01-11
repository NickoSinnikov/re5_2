import React from 'react';
import { useState } from 'react';

export default function Input(props) {
  const [input, setInput] = useState('');

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  return (
    <input
      type={props.type}
      onChange={onChangeHandler}
      value={input}
      className={props.className}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
}
