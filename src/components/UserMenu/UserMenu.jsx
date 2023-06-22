// Libs
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// Redux selectors
import { getUserName } from 'redux/auth/authSelectors';
// Styled components
import { LogOutBtn, UserName, UserMenuWrap } from './UserMenu.styled';
import { logOutUser } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  const handeleLogOut = () => {
    dispatch(logOutUser())
      .unwrap()
      .then(() => toast.success('Logout succesfull.'))
      .catch(() => toast.error('Logout error, please try again.'));
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
