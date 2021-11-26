import styled from '@emotion/styled';
import {
  ContactContext,
  ContactStore,
  CustomerForm,
  CustomerType,
} from '@workshop/phonebook';
import { useContext } from 'react';

const StyledPage = styled.div`
  .page {
  }
`;

export function Customer() {
  const customer: CustomerType = {
    id: '1',
    name: 'John Doe',
    phone: '+1-555-555-5555',
    email: 'asd@asd.com',
    address: '123 Main St',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return (
    <StyledPage>
      <h2>Customer edit page!</h2>
      <CustomerForm customer={customer} />
    </StyledPage>
  );
}

export default Customer;
