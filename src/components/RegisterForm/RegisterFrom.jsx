import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/operations';
import {
  Button,
  Flex,
  FormStyled,
  Input,
  Label,
  Title,
} from './RegisterForm.styled';
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      signUp({
        name,
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <Flex>
      <Title>Sign Up</Title>
      <Formik onSubmit={handleSubmit} initialValues={{ name, email, password }}>
        <FormStyled autoComplete="off">
          <Label htmlFor="name-input">
            <Input
              value={name}
              onChange={handleChange}
              required
              type="text"
              name="name"
              label="Name"
              id="name-input"
              variant="outlined"
              color="primary"
              size="small"
            />
          </Label>
          <Label htmlFor="email-input">
            <Input
              value={email}
              onChange={handleChange}
              required
              type="email"
              name="email"
              label="E-mail"
              id="email-input"
              pattern="^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,63}(\.[a-zA-Z]{2,63})*)$"
              title="Please enter a valid email address. For example, johndoe@example.com"
              variant="outlined"
              color="primary"
              size="small"
            />
          </Label>
          <Label htmlFor="password-input">
            <Input
              value={password}
              onChange={handleChange}
              required
              label="Password"
              id="password-input"
              type="password"
              name="password"
              title="Password must be minimum 8 characters long"
              variant="outlined"
              color="primary"
              size="small"
            />
          </Label>
          <Button type="submit">Register</Button>
        </FormStyled>
      </Formik>
    </Flex>
  );
};
