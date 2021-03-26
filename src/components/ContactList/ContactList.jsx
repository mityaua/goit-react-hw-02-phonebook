import ContactItem from '../ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
