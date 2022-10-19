import React from 'react';
import { nanoid } from 'nanoid'
import styled from 'styled-components';

const Form = styled.form`
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
`;

const Label = styled.label`
display: flex;
margin: 10px;
font-size: 20px;
`;

const Input = styled.input`
display: flex;
margin: 10px;
padding-left: 16px; 
width: 200px;
height: 30px;
font-size: 18px;
border-radius: 4px;
`;
const Button = styled.button`
        &:hover,
        &:focus {
            background-color: #2196F3;
            color: white;
            cursor: pointer;
        }

    border-radius: 4px;
    padding: 5px;
    font-weight: 500;
    font-size: 18px;
    margin: 15px;    
    text-align: center;
    border: solid 1px black;
    background-color: white;

    -webkit-transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  addTodo = (text) => {
    console.log(text)
  }
  inputIdName = nanoid()
  inputIdNumber = nanoid()


  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    this.props.onSubmit(this.state)
    this.cleanField()
  }

    cleanField = () => {
    this.setState({ name: '' })
    this.setState({ number: ''})
  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
          id = {this.inputIdName}
        />
        
        <Label>Number</Label>
        <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
          id = {this.inputIdNumber}
          />
          
        <Button type="submit">Add contact</Button>
      </Form>
    )
  }
};

