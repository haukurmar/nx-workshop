import { Heading } from '@nordax/main-ui';
import { CustomerForm } from '../../../packages/phonebook/src/CustomerForm';
import { ContactList, CustomerType } from '@workshop/phonebook';

export function Index() {
  const customer: CustomerType = {
    id: '1',
    name: 'John Doe',
    phone: '+1-555-555-5555',
    email: 'asd@asd.com',
    address: '123 Main St',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <div>
      <Heading>Welcome to my little black book</Heading>

      <CustomerForm customer={customer} />

      <ContactList contacts={[customer]} />
    </div>
  );
}

export default Index;
