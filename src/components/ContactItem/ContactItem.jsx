const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li>
      <span>{contact.name}</span>: <span>{contact.number}</span>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
