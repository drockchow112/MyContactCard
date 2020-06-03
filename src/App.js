import React from 'react';
import './App.css';
import ContactCard from './contactcard';


function App() {
  return (
    <div id="container">
      <ContactCard
        mPhone="232-2323-2323"
        name="Issac Tybur"
        wPhone="111-111-2222"
        email="attackOnTitan@eldia.net"
      />
      <ContactCard
        mPhone="434-3434-3434"
        name="Johnny Bravo"
        wPhone="565-242-3464"
        email="hello@gmail.com"
      />
      <ContactCard
        mPhone="685-547-2356"
        name="Peter Griffin"
        wPhone="456-734-6663"
        email="attackOnTitan@eldia.net"
      />
    </div>
  );
}

export default App;
