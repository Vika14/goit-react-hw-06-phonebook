import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/filterSlice';
import css from './filter.module.css';
import { nanoid } from 'nanoid';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const filId = nanoid();
  return (
    <div className={css.forma}>
      <label htmlFor={filId} className={css.nameNumber}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          id={filId}
          className={css.pole}
        />
      </label>
    </div>
  );
};
