import React from 'react';

export default function NewsList(props) {
  return <ul className={props.className}>{props.children(props.items)}</ul>;
}
