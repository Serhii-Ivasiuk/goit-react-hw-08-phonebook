// Styled components
import { LogOutBtn, UserMail, UserMenuWrap } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <UserMenuWrap>
      <UserMail>mango@mail.com</UserMail>
      <LogOutBtn type="button">Log out</LogOutBtn>
    </UserMenuWrap>
  );
};
