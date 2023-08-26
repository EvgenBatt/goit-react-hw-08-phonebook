import { Container } from '@mui/material';
import { RegisterForm } from 'components';
import { Toaster } from 'react-hot-toast';
import { Section } from 'styles';

export const Register = () => {
  return (
    <>
      <main>
        <Section>
          <Container>
            <Toaster />
            <RegisterForm />
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Register;
