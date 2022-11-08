import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import { Box } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  onClickDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
    this.setState({
      filter: '',
    });
  };

  formSubmitHandler = data => {
    console.log(data);
    console.log(this.state.contacts);

    const newContact = { id: nanoid(), name: data.name, number: data.number };

    this.state.contacts.map(contact => contact.name).includes(newContact.name)
      ? window.alert(`${newContact.name} is already in your phonebook`)
      : this.setState(prevState => {
          return {
            contacts: [newContact, ...prevState.contacts],
          };
        });
  };

  render() {
    const contactsFiltered = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Box>
        <Section title={'Phonebook'}>
          <Form Submit={this.formSubmitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Filter value={this.state.filter} onChange={this.onFilterChange} />
          <Contacts contacts={contactsFiltered} onClick={this.onClickDelete} />
        </Section>
      </Box>
    );
  }
}

export default App;
