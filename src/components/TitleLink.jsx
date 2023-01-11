import React from 'react';

export default function TitleLink(props) {
  return (
    <li className="title__elem">
      <a className="title__link" link={props.href}>
        {props.children}
      </a>
    </li>
  );
}
