import styled from '@emotion/styled';

export const Box = styled.div`
  padding: ${props => props.theme.spacing(2)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSize.m};
`;
