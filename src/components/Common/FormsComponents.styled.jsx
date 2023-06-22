// Libs
import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 16px;
  border: 1px solid #505050;
  border-radius: 12px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const InputHeading = styled.span`
  padding-left: 16px;
  font-weight: 700;
`;

export const Input = styled.input`
  height: 32px;
  padding: 16px;
  font-size: 16px;
  color: #505050;
  border: none;
  border-radius: 8px;
  outline: ${({ validate }) =>
    validate ? '1px solid #fc8181' : '1px solid #505050'};
  outline-offset: -1px;

  &:focus {
    outline: ${({ validate }) =>
      validate ? '2px solid #fc8181' : '2px solid #505050'};
    outline-offset: -2px;
  }
`;

export const SubmitBtn = styled.button`
  height: 32px;
  padding: 4px 12px;
  min-width: 110px;
  text-transform: uppercase;
  font-weight: 700;
  background-color: #008000;
  color: #ffffff;
  text-shadow: 1px 1px 2px #505050;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #006f00;
  }

  &:disabled {
    cursor: initial;
    background-color: #505050;
  }
`;

export const ValidationMessage = styled.span`
  padding: 0 16px;
  color: #fc8181;
`;
