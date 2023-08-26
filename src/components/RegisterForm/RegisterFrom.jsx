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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      signUp({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Flex>
      <Title>Sign Up</Title>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <FormStyled autoComplete="off">
          <Label htmlFor="name-input">
            <Input
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
              required
              label="Password"
              id="password-input"
              type="password"
              name="password"
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
