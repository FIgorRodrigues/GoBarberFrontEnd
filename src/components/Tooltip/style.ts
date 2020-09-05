import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }

  span {
    position: absolute;
    color: #312e38;
    background-color: #ff9000;
    padding: 6px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    width: 180px;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(100% + 10px);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s;

    &::before {
      content: '';
      position: absolute;
      border-color: #ff9000 transparent;
      border-style: solid;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
