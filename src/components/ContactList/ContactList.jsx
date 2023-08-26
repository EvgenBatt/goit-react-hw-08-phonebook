import { Li, Ul, Button, DeleteIcon, Name, Phone } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContact } from 'redux/filter/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContact);

  return (
    <Ul>
      {contacts.map(({ name, number, id }) => (
        <Li key={id}>
          <div>
            <Name>{name}</Name>
            <Phone>{number}</Phone>
          </div>
          {
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContact(id))}
            >
              <DeleteIcon />
            </Button>
          }
        </Li>
      ))}
    </Ul>
  );
};
