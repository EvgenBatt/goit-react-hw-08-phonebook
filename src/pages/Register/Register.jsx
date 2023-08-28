import { RegisterForm } from 'components';
import { Toaster } from 'react-hot-toast';
import { Container, Section } from 'styles';

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
