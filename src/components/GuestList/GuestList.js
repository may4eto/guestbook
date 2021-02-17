import React from 'react';
import { Guest } from '../Guest/Guest'

export const GuestList = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Details</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.guests.length > 0 ? (
                        props.guests.map(guest => (
                           <tr key={guest.id}>
                               <td>
                                   <Guest guest={guest}/>
                                </td>
                               <td className="align-middle">
                                   <button type="button" className="btn btn-warning mb-2 mb-lg-0 mr-2"onClick={()=>props.editGuest(guest)}>Edit</button>
                                   <button type="button" className="btn btn-danger mb-2 mb-lg-0 mr-2" onClick={()=>props.deleteGuest(guest.id)}>Delete</button>
                               </td>
                           </tr> 
                        ))
                    ) : (<tr>No Guests</tr>)
                }
            </tbody>
        </table>
    )
}