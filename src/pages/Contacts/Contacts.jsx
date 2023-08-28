import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { EmptyContact, Flex } from './Contacts.styled';
import { ContactForm, ContactList, Filter } from 'components';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Container, Section } from 'styles';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Section>
        <Container>
          <Toaster />
          <Flex>
            <ContactForm />
            <div>
              {contacts.length > 0 ? (
                <Filter />
              ) : (
                <EmptyContact>
                  Your phonebook is empty. Add first contact!
                </EmptyContact>
              )}
              {contacts.length > 0 && <ContactList />}
            </div>
          </Flex>
        </Container>
      </Section>
    </main>
  );
};

export default Contacts;
