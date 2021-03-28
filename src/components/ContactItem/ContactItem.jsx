import styles from './ContactItem.module.scss';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{contact.name}: </span>
      <a href={`tel:${contact.number}`} className={styles.number}>
        {contact.number}
      </a>
      <button
        className={styles.button}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
