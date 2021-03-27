const ContactItem = ({ contact }) => {
  return (
    <li>
      <span>{contact.name}</span>: <span>{contact.number}</span>
      <button type="button">Delete</button>
    </li>
  );
};

export default ContactItem;
