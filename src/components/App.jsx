import React from 'react';
import { nanoid } from 'nanoid'
import { ContactForm } from './form/ContactForm'
import { Filter } from './filter/filter';
import { ContactList } from './contactsList/contactsList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  addTodo = newUser => {
    const userSearch = this.state.contacts.find(
      ({ name }) => name === newUser.name
    );
    userSearch
      ? alert(`${userSearch.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { ...newUser, id: nanoid() }],
        }));
  };

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }
  filterContacts = () => {
    const { filter, contacts } = this.state;
    if (this.state.filter) {
      return contacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }
    return contacts;
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId )
    }))
  }

  render() {
    const { filter } = this.state

    return (
      <>``
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addTodo} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={ this.changeFilter} />
        <ContactList filterList={this.filterContacts} onDelete={this.deleteContact} />
        
        </>
    )
  }
};

