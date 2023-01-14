import React from 'react';
import Form from './Form';
import Input from './Input';
import Logo from './Logo';
import Button from './Button';

export default function SearchWidget(props) {
  return (
    <div className="search__container">
      <Logo className="main-logo">
        <img src={props.logo} style={{width:'100%'}}/>
      </Logo>
      <Form className="search__form main__search">
        <Input
          type="search"
          className="search__input"
          placeholder="Поиск..."
        ></Input>
        <Button className="button">
          Найти
        </Button>
      </Form>
    </div>
  );
}
