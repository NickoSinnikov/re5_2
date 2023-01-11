import React from 'react';
import Form from './Form';
import Input from './Input';

export default SearchWidget = (props) => {
  return (
    <SearchContainer>
      <Logo />
      <Form className="search__form main__search">
        <Input placeholder="Поиск..."></Input>
        <Button className="button">Поиск</Button>
      </Form>
    </SearchContainer>
  );
};
