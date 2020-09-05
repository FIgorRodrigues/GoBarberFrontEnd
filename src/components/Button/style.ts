import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.button`
  margin: 24px 0;
  background: #ff9000;
  border: 0;
  border-radius: 10px;
  height: 56px;
  width: 100%;
  color: #312e38;
  font-weight: 500;
  transition: background 0.2s;
  transition: color 0.2s;

  &:hover {
    background: ${shade(0.1, '#ff9000')};
    color: ${lighten(0.8, '#312e38')};
  }
`;
