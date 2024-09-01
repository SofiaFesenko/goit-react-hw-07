import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact'

import css from './ContactList.module.css'
import { selectFilteredContacts } from '../../redux/contactsSlice';

function ContactList() {

  const filteredContacts = useSelector(selectFilteredContacts)


  return (
    <div className={css.contactsMainBlock}>
      {filteredContacts.map( contact => {
        return (
          <div className={css.contactBlock}>
            <Contact name={contact.name} number={contact.number} id={contact.id} />
          </div>        
        )
      })}
    </div>
  )
}

export default ContactList