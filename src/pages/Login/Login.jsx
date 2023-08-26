import { Container } from '@mui/material';
import { LoginForm } from 'components';
import { Toaster } from 'react-hot-toast';
import { Section } from 'styles';

export const Login = () => {
  return (
    <>
      <main>
        <Section>
          <Container>
            <Toaster />
            <LoginForm />
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Login;
