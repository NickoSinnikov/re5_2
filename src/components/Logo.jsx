import React from 'react';
import Link from './Link';

export default function Logo(props) {
  return (
    <div>
      <Link className={props.className} href={props.href}>
        {props.children}
      </Link>
    </div>
  );
}
