import { Container } from '@mui/material';
import { Section } from 'styles';
import { Text, TextWrap } from './Error.styled';

const Error = () => {
  return (
    <>
      <Section>
        <Container>
          <TextWrap>
            <Text>404 Not Found</Text>
          </TextWrap>
        </Container>
      </Section>
    </>
  );
};

export default Error;
