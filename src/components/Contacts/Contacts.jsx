import PropTypes from 'prop-types';
import { Item, List } from './Contacts.styled';

export const Contacts = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => onClick(id)}>
              Delete
            </button>
          </Item>
        );
      })}
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};
