import { Container, Section } from 'styles';
import { LinkStyled, Text, TextWrap, Title } from './Home.styled';
import { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
      <main>
        <Toaster />
        <Section>
          <Container>
            <TextWrap>
              <Title>Welcome to Phonebook!</Title>
              <Text>
                Please <LinkStyled to="/register">sign up</LinkStyled> or{' '}
                <LinkStyled to="/login">log in</LinkStyled> with your username and
                password{' '}
              </Text>
            </TextWrap>
          </Container>
        </Section>
      </main>
  );
};

export default Home;
