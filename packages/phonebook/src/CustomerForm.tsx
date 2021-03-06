import styled from '@emotion/styled';
import { CustomerType } from './types/CustomerType';
import { FormEvent, useContext, useState } from 'react';

import LukasSwag from './LukasSwag';
import { ContactContext } from './lib/store/storeContext';

/* eslint-disable-next-line */
export interface CustomerFormProps {
  customer: CustomerType;
}

const StyledCustomerForm = styled.div`
  color: pink;
`;

const StyledDiv = styled.div(
  (props: { alignment?: 'left' | 'center' | 'right' }) => ({
    display: 'flex',
    justifyContent: props.alignment ?? 'left',
  })
);

export function CustomerForm(props: CustomerFormProps) {
  const { customer } = props;
  const store = useContext(ContactContext);

  const [values, setValues] = useState(customer);
  const [showSwag, setShowSwag] = useState(false);

  const updateField = (field: keyof CustomerType, value: string) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const saveCustomer = (ev: FormEvent) => {
    ev.preventDefault();
    store.addContact(values);
    console.log('save customer', values);

    if (values.name.toLowerCase() === 'lukas') {
      setShowSwag(true);
    }
  };

  return (
    <StyledCustomerForm>
      {showSwag && <LukasSwag />}
      <form onSubmit={saveCustomer}>
        <StyledDiv>
          <label htmlFor="">
            Name:
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={(ev) => updateField('name', ev.target.value)}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="">
            Email:
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={(ev) => updateField('email', ev.target.value)}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="">
            Phone:
            <input
              type="text"
              name="phone"
              value={values.phone}
              onChange={(ev) => updateField('phone', ev.target.value)}
            />
          </label>
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="">
            Address:
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={(ev) => updateField('address', ev.target.value)}
            />
          </label>
        </StyledDiv>
        <StyledDiv alignment="center">
          <button type="submit">Save</button>
        </StyledDiv>
      </form>
    </StyledCustomerForm>
  );
}

export default CustomerForm;
