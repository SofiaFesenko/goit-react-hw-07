import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'

import ContactList from './components/ContactList/ContactList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchContacts } from './redux/contactsOps'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />

      <ContactList />
    </>
  )
}



export default App
