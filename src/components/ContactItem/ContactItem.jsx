const ContactItem = ({ contact }) => {
  return (
    <li>
      <span>{contact.name}</span>: <span>{contact.number}</span>
    </li>
  );
};

export default ContactItem;
