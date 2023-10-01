import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectorFilter } from 'redux/sliceFilter';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectorFilter);
  return (
    <div>
      <h4>Find contacts by name</h4>
      <input
        onChange={e => dispatch(changeFilter(e.target.value))}
        value={filter}
      ></input>
    </div>
  );
};
