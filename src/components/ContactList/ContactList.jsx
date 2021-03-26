import ContactItem from '../ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
