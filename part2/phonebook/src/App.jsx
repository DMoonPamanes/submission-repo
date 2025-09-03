import { useState } from 'react'

const Filter = ({ filter, handleFilterChange }) => (
  <div>
    filter shown with <input value={filter} onChange={handleFilterChange} />
  </div>
)

const PersonForm = ({
  newName,
  newPhone,
  handlePersonChange,
  handlePhoneChange,
  AddPerson
}) => (
  <form onSubmit={AddPerson}>
    <div>
      name: <input value={newName} onChange={handlePersonChange} />
    </div>
    <div>
      phone: <input value={newPhone} onChange={handlePhoneChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Persons = ({ persons }) => (
  <div>
    {persons.map(person => (
      <p key={person.name}>{person.name} {person.phone}</p>
    ))}
  </div>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const AddPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const PersonObject = {
      name: newName,
      phone: newPhone
    }
    setPersons(persons.concat(PersonObject))
    setNewName('')
    setNewPhone('')
  }

  const handlePersonChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const showPerson = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        handlePersonChange={handlePersonChange}
        handlePhoneChange={handlePhoneChange}
        AddPerson={AddPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={showPerson} />
    </div>
  )
}

export default App