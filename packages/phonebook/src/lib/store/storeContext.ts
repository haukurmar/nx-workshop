import { ContactStore } from '@workshop/phonebook';
import React from 'react';

const ContactContext = React.createContext<ContactStore>({} as ContactStore);

export { ContactContext };
