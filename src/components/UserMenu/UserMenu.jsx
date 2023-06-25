// Libs
import { useDispatch, useSelector } from 'react-redux';
import { ImExit, ImUser } from 'react-icons/im';
import { toast } from 'react-toastify';
// Redux selectors
import { getIsLoading, getUserName } from 'redux/auth/authSelectors';
// React components
import { CenteredLoader } from 'components/Loaders/Loaders';
// Styled components
import {
  LogOutBtn,
  UserName,
  UserMenuWrap,
  LogOutText,
  User,
} from './UserMenu.styled';
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
      <User>
        <ImUser size={16} />
        <UserName>{userName}</UserName>
      </User>

      <LogOutBtn type="button" onClick={handeleLogOut} disabled={isLoading}>
        {isLoading && <CenteredLoader />}
        {!isLoading && (
          <>
            <ImExit />
            <LogOutText>Log out</LogOutText>
          </>
        )}
      </LogOutBtn>
    </UserMenuWrap>
  );
};
