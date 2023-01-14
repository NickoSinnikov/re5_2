import React from 'react';
import Link from './Link';

export default function Logo(props) {
  return (
    <div className={props.className}>
      <Link className={props.className + '__link'} href={props.href}>
        {props.children}
      </Link>
    </div>
  );
}
