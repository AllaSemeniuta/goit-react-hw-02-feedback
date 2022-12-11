import styled from 'styled-components';
import theme from 'theme'

export const Button = styled.button`
  cursor: pointer;
  padding: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[4]};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};

  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]};
  }
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.ligthGrey};
  }
`;
