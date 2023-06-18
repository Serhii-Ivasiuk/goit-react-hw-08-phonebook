// Libs
import { useDispatch, useSelector } from 'react-redux';
// Redux selectors
import { getUserName } from 'redux/auth/authSelectors';
// Styled components
import { LogOutBtn, UserName, UserMenuWrap } from './UserMenu.styled';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  const handeleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuWrap>
      <UserName>{userName}</UserName>
      <LogOutBtn type="button" onClick={handeleLogOut}>
        Log out
      </LogOutBtn>
    </UserMenuWrap>
  );
};
