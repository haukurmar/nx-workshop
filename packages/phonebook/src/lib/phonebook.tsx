import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PhonebookProps {}

const StyledPhonebook = styled.div`
  color: pink;
`;

export function Phonebook(props: PhonebookProps) {
  return (
    <StyledPhonebook>
      <h1>Welcome to Phonebook!</h1>
    </StyledPhonebook>
  );
}

export default Phonebook;
