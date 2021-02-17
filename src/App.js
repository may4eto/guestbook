import React, { useState, useEffect } from 'react';
import { GuestList } from './components/GuestList/GuestList';
import { AddGuestForm } from './components/AddGuestForm/AddGuestForm';
import { EditGuestForm } from './components/EditGuestForm/EditGuestForm';

export const App = () => {
  const iniatialFormState = {
    id: null,
    name: '',
    street: '',
    city: '',
    zip: '',
    phone: ''
};
  const [guests, setGuests] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentGuest, setCurrentGuest] = useState(iniatialFormState);
  useEffect(() => {
    setGuests (
      [
        {   
          id: 1,
          name: 'Maya Mircheva',
          street: '123 Main St.',
          city: 'Awesomeville',
          zip: '12345',
          phone: '555-555-1234'
        }
      ]
    )
  }, [])
  const addGuest = guest => {
    guest.id = guests.length + 1;
    setGuests([...guests, guest]);
  }
  const deleteGuest = id => {
    setGuests(guests.filter(guest=>guest.id !== id))
  }
  const editGuest = guest => {
    setEditing(true);
    setCurrentGuest({id: guest.id, name: guest.name, street: guest.street, city: guest.city, zip: guest.zip, phone: guest.phone})
  }
  const updateGuest = (id, updatedGuest) => {
    setEditing(false);
    setGuests(guests.map(guest=> (guest.id === id ? updatedGuest : guest)));
  }
  return (
    <div className="container">
      <h1 className="my-5">Please Sign My Guestbook</h1>
      <div className="row">
        <div className="col">
          {
          editing ? (
            <div>
              <h2 className="mb-4">Edit Guest</h2>
              <EditGuestForm editing={editing} setEditing={setEditing} currentGuest={currentGuest} updateGuest={updateGuest}/>
            </div>
          ) : (
            <div>
            <h2 className="mb-4">Sign In</h2>
            <AddGuestForm addGuest={addGuest} />
          </div>
          )
        }
        </div>
        <div className="col">
          <h2 className="mb-4">Guests</h2>
          <GuestList guests={guests} deleteGuest={deleteGuest} editGuest={editGuest}/>
        </div>
      </div>
    </div>
  );
}

