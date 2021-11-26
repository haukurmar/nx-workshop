import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MainUiProps {}

const StyledMainUi = styled.div`
  color: pink;
`;

export function MainUi(props: MainUiProps) {
  return (
    <StyledMainUi>
      <h1>Welcome to MainUi!</h1>
    </StyledMainUi>
  );
}

export default MainUi;
