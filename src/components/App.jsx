import { Header, Filter, ContactForm, ContactList, Loader } from 'components';
import { EmptyContact, Flex } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Container } from '@mui/material';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <Header />
      <Container>
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
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
    </>
  );
};
