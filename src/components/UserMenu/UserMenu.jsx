// Libs
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// Redux selectors
import { getIsLoading, getUserName } from 'redux/auth/authSelectors';
// React components
import { CenteredLoader } from 'components/Loaders/Loaders';
// Styled components
import { LogOutBtn, UserName, UserMenuWrap } from './UserMenu.styled';
import { logOutUser } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const userName = useSelector(getUserName);
  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();

  const handeleLogOut = () => {
    dispatch(logOutUser())
      .unwrap()
      .catch(() => toast.error('Logout error, please try again.'));
  };

  return (
    <UserMenuWrap>
      <UserName>{userName}</UserName>
      <LogOutBtn type="button" onClick={handeleLogOut}>
        {isLoading ? <CenteredLoader /> : 'Log out'}
      </LogOutBtn>
    </UserMenuWrap>
  );
};
