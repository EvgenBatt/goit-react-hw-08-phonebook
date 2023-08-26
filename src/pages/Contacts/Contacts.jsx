import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { EmptyContact, Flex } from './Contacts.styled';
import { ContactForm, ContactList, Filter } from 'components';

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
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
    </>
  );
};

export default Contacts;
