import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[4]};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  color: black;

  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]};
  }

  :hover,
  :focus {
    background-color: ${({ children }) => {
      switch (children) {
        case 'good':
          return 'green';
        case 'neutral':
          return 'yellow';
        case 'bad':
          return 'red';
        default:
          return;
      }
    }};
    color: black;
  }
`;
