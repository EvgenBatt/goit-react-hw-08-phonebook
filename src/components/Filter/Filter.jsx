import { Label, Input, SearchIconStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Label>
        <Input
          id="input-with-sx"
          type="text"
          label="Find contacts"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
          variant="standard"
          color="primary"
        />
        <SearchIconStyled sx={{ mr: 1, my: 0.5 }} />
      </Label>
    </>
  );
};
