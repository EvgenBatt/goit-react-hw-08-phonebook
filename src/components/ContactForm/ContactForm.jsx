import { useState } from 'react';
import {
  Form,
  Label,
  Input,
  Button,
  NumberIcon,
  NameIcon,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/operations';
import { toast } from 'react-hot-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      toast.error(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name-input">
          <NameIcon sx={{ mr: 1, my: 0.5 }} />
          <Input
            type="text"
            name="name"
            label="Name"
            id="name-input"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            variant="standard"
            color="primary"
          />
        </Label>

        <Label htmlFor="number-input">
          <NumberIcon sx={{ mr: 1, my: 0.5 }} />
          <Input
            type="tel"
            id="number-input"
            name="number"
            label="Number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            variant="standard"
            color="primary"
          />
        </Label>

        <Button type="submit">Add Contact</Button>
      </Form>
    </>
  );
};
