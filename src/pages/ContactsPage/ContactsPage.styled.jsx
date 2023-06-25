// Libs
import styled from '@emotion/styled';

export const ContactsPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin: 0 auto;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MainTitle = styled.h1`
  padding-left: 32px;
`;

export const SectionTitle = styled.h2`
  padding-left: 32px;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #505050;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const InfoMessage = styled.p`
  font-weight: 700;
  text-align: center;
  color: #505050;
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  text-align: center;
  color: #fc8181;
`;
