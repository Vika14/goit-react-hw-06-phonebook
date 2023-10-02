import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import css from './contacts.module.css';

export const contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={css.contactListItem}>
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.cont}>
            {name}: {number}
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={css.btnList}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
