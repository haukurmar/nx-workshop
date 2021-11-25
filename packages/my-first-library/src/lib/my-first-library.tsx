import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MyFirstLibraryProps {}

const StyledMyFirstLibrary = styled.div`
  color: pink;
`;

export function MyFirstLibrary(props: MyFirstLibraryProps) {
  return (
    <StyledMyFirstLibrary>
      <h1>Welcome to MyFirstLibrary!</h1>
    </StyledMyFirstLibrary>
  );
}

export default MyFirstLibrary;
