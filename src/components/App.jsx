import React from 'react';
import { FormContaks } from './form/FormContaks';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

export const App = () => {
  return (
    <>
      <FormContaks />
      <h2>Filter</h2>
      <Filter />
      <ContactList />
    </>
  );
};
