import { CustomerType } from '@workshop/phonebook';

export class ContactStore {
  isClientSide = (): boolean => {
    return typeof window !== 'undefined';
  };
  addContact = (customer: CustomerType) => {
    if (this.isClientSide()) {
      customer.id = (this.getNumberOfContacts()! + 1).toString();
      window.localStorage.setItem(customer.id, JSON.stringify(customer));
    }
  };

  getContact = (id: string): CustomerType | undefined => {
    if (this.isClientSide()) {
      return JSON.parse(localStorage.getItem(id) || '');
    }
    return undefined;
  };
  getContacts = (): CustomerType[] => {
    if (this.isClientSide()) {
      const contacts: CustomerType[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const x: string | null = localStorage.key(i);
        if (x) {
          contacts.push(JSON.parse(x));
        }
      }
      return contacts;
    }
    return [];
  };

  getNumberOfContacts = (): number | undefined => {
    if (this.isClientSide()) {
      return localStorage.length;
    }
    return undefined;
  };

  deleteContact = (name: string) => {
    if (this.isClientSide()) {
      localStorage.removeItem(name);
    }
  };
  // const deleteContact = (name:string) => {

  // }

  //AddContact( namn, telefonnummer )
  //GetContact( ))
  //DeleteContact
  //EditContact
}
