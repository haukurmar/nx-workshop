import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CustomerFormProps {}

const StyledCustomerForm = styled.div`
  color: pink;
`;

export function CustomerForm(props: CustomerFormProps) {
  return (
    <StyledCustomerForm>
      <h1>Welcome to CustomerForm!</h1>
    </StyledCustomerForm>
  );
}

export default CustomerForm;
