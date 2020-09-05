import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: #232129;
  border-radius: 10px;
  width: 100%;
  padding: 16px;
  height: 56px;

  border: 2px solid #232129;
  color: #666360;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `};

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `};

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9000;
    `};

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 18px;
  }

  input {
    flex: 1;
    color: #f4ede8;
    background-color: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 30px #232129 inset;
      -webkit-text-fill-color: #f4ede8;
    }
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
