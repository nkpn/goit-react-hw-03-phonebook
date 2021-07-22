import React, { Component } from 'react';
import notify from 'helpers/Toast';
import { ToastContainer } from 'react-toastify';
import '../index.css';
//* Components
import Container from './Container';
import SubmitForm from './SubmitForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  static defaultProps = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  state = {
    contacts: [...this.props.contacts],
    filter: '',
  };

  AddContactOnSubmit = data => {
    const contact = {
      name: data.name,
      number: data.number,
      id: data.id,
    };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase(),
      )
    ) {
      notify(data.name);
      return;
    }

    this.setState(preventState => ({
      contacts: [contact, ...preventState.contacts],
    }));
  };

  onFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = data => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== data),
    }));
  };

  render() {
    const { filter } = this.state;
    const { deleteContact, onFilter, AddContactOnSubmit } = this;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <SubmitForm submittedProps={AddContactOnSubmit} />
        <h1>Contacts</h1>
        <Filter value={filter} onChange={onFilter} />
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
        <ToastContainer />
      </Container>
    );
  }
}

export default App;
