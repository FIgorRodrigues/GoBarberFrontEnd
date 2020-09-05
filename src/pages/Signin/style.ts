import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import SignInBackground from '../../assets/sign-in-background.svg';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  form {
    margin: 8% 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      transition: color 0.2s;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  a {
    color: #ff9000;
    display: flex;
    align-items: center;
    transition: color 0.2s;
    text-decoration: none;

    &:hover {
      color: ${shade(0.2, '#FF9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackground}) no-repeat center;
  background-size: cover;
`;
