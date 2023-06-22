// Libs
import { useDispatch, useSelector } from 'react-redux';
// Redux selectors
import { getFilter } from 'redux/filter/filterSelectors';
// Redux actions
import { filterContacts } from 'redux/filter/filterSlice';
// Styled components
import { Label, InputHeading, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterInput = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <Label>
      <InputHeading>Search contacts by name or number</InputHeading>
      <Input
        type="text"
        name="filter"
        title="Please enter a name to find your contacts"
        value={filter}
        onChange={handleFilterInput}
      />
    </Label>
  );
};
