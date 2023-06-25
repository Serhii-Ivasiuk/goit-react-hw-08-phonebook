// Libs
import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #505050;
  border-radius: 12px;
  background-color: #f8f8ff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
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
  transition: background-color 250ms linear,
    box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #006f00;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  &:disabled {
    cursor: initial;
    background-color: #505050;
    box-shadow: none;
  }
`;

export const ValidationMessage = styled.span`
  padding: 0 16px;
  color: #fc8181;
`;
