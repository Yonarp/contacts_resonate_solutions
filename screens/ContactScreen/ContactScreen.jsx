import React from "react";
import ContactCard from "../../components/ContactCard/ContactCard";
import NavBar from "../../components/NavBar/NavBar";




  
function ContactScreen({props}) {
  return (
    <div className="container">
      <NavBar />
      <div className="contact-section">
        {props.map(item => {
            return (
                <ContactCard key = {item.id} data= {item}/>
            )
        })}
      </div>
    </div>
  );
}

export default ContactScreen;
