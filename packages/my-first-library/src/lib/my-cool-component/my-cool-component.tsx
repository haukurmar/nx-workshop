import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MyCoolComponentProps {}

const StyledMyCoolComponent = styled.div`
  color: pink;
`;

export function MyCoolComponent(props: MyCoolComponentProps) {
  return (
    <StyledMyCoolComponent>
      <h1>Welcome to MyCoolComponent!</h1>
    </StyledMyCoolComponent>
  );
}

export default MyCoolComponent;
