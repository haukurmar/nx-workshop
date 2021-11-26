import styled from '@emotion/styled';
import { CustomerType } from './types/CustomerType';
import { FormEvent, useContext, useState } from 'react';
import { ContactContext } from '.';

/* eslint-disable-next-line */
export interface CustomerFormProps {
  customer: CustomerType;
}

const StyledCustomerForm = styled.div`
  color: pink;
`;

export function CustomerForm(props: CustomerFormProps) {
  const { customer } = props;
  const store = useContext(ContactContext);

  const [values, setValues] = useState(customer);

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
  };

  return (
    <StyledCustomerForm>
      <h1>Welcome to CustomerForm!</h1>
      <form onSubmit={saveCustomer}>
        <div>
          <label htmlFor="">
            Name:
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={(ev) => updateField('name', ev.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Email:
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={(ev) => updateField('email', ev.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Phone:
            <input
              type="text"
              name="phone"
              value={values.phone}
              onChange={(ev) => updateField('phone', ev.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Address:
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={(ev) => updateField('address', ev.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </StyledCustomerForm>
  );
}

export default CustomerForm;
