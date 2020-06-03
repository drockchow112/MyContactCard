import React from 'react';


function ContactCard(props) {
    return (
      <div className="contactCard">
        <h1>Name: {props.name}</h1>
        <h3>Mobile Phone: {props.mPhone}</h3>
        <h3>Work Phone: {props.wPhone}</h3>
        <h3>Email: {props.email}</h3>
      </div>
    );
}

export default ContactCard;