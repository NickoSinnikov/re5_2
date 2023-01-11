import React from 'react';

export default function NewsItem(props) {
  return <li className={props.className}>{props.children}</li>;
}
