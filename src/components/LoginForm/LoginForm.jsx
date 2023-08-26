import { Formik } from 'formik';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import {
  Button,
  Flex,
  FormStyled,
  Input,
  Label,
  Title,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn({ email: values.email, password: values.password }))
      .then(() => {
        toast.success('Login successful');
        resetForm();
      })
      .catch(() => {
        toast.error('Invalid username or password');
      });
  };

  return (
    <Flex>
      <Title>Log In</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <FormStyled autoComplete="off">
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
          <Label>
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
          <Button type="submit">Login</Button>
        </FormStyled>
      </Formik>
    </Flex>
  );
};
