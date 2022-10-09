import React, { useState } from "react";
import ContactCard from "../../components/ContactCard/ContactCard";

/** this is the main screen of our app , it displays the search bar and uses ContactCard components to
 * display all the fetched contacts to the screen
 *
 * @param {*} props: the passsed props from index.js
 * @returns
 */

function ContactScreen({ props }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container">
      <div className="search-form">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Your Contacts By Name.."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="contact-section">
        {/* Here we are filtering contacts by their name based on the input of the search bar and then displaying them by mapping each item */}
        {props
          .filter((item) => {
            if (searchTerm == "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            return <ContactCard key={item.id} data={item} />;
          })}
      </div>
    </div>
  );
}

export default ContactScreen;
