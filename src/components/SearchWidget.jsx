import React from 'react';
import Form from './Form';
import Input from './Input';
import Logo from './Logo';
import Button from './Button';

export default function SearchWidget(props) {
  return (
    <div className="search__container">
      <Logo>
        <img src={props.logo} />
      </Logo>
      <Form className="search__form main__search">
        <Input
          type="search"
          className="search__input"
          placeholder="Поиск..."
        ></Input>
        <Button className="button" type="submit">
          Поиск
        </Button>
      </Form>
    </div>
  );
}
