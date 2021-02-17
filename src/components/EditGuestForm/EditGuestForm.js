import React, { useState, useEffect } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import PhoneIcon from '@material-ui/icons/Phone';
export const EditGuestForm = props => {
    const [guest, setGuest] = useState(props.currentGuest);
    const handleInputChanged = event => {
        const {name, value} = event.target;
        setGuest({...guest, [name]: value});
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.updateGuest(guest.id, guest);
    }
    useEffect(() => {
        setGuest(props.currentGuest);
    }, [props])
    return (
        <form className="pr-5" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <div class="input-group mb-3 mr-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    <PersonIcon />
                  </span>
                </div>
                <input required type="text" name="name" value={guest.name} className="form-control" onChange={handleInputChanged}></input>
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="street">Street</label>
            <div class="input-group mb-3 mr-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    <HomeIcon />
                  </span>
                </div>
                <input required type="text" name="name" value={guest.street} className="form-control" onChange={handleInputChanged}></input>
            </div>
        </div>
        <div className="d-flex">
            <div className="form-group col-md-6 pl-0 pr-2">
                <label htmlFor="city">City</label>
                <div class="input-group mb-3 mr-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                        <LocationCityIcon />
                    </span>
                    </div>
                    <input required type="text" name="city" value={guest.city} className="form-control" onChange={handleInputChanged}></input>
                </div>
            </div>
            <div className="form-group col-md-6 pl-0 pr-0">
                <label htmlFor="zip">Zip</label>
                <div class="input-group mb-3 mr-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                        <MarkunreadMailboxIcon />
                    </span>
                    </div>
                    <input required type="text" name="zip" value={guest.zip} className="form-control" onChange={handleInputChanged}></input>
                </div>
            </div>
        </div>
        <div className="form-group mb-4">
            <label htmlFor="phone">Phone</label>
            <div class="input-group mb-3 mr-3">
                <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                    <PhoneIcon />
                </span>
                </div>
                <input required type="text" name="phone" value={guest.phone} className="form-control" onChange={handleInputChanged}></input>
            </div>
        </div>
        <button className="btn btn-primary mr-2" type="submit">Update Guest</button>
        <button className="btn btn-secondary" onClick={()=>props.setEditing(false)}>Cancel</button>
        </form>
    )
}
