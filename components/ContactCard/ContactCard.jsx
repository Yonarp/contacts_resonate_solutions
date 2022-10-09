/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import {motion} from 'framer-motion'



/**
 * This is the component for each card that contains a contacts information
 * since making the website visually appealing was a criteria we have used framer motion to do simple animations
 * we are displaying each contacts name and their username and on clicking it will reveal the contacts email and phone number
 * @param {*} data: json data passed from Contact Screen 
 * @returns 
 */

function ContactCard({ data }) {
  const image = `https://robohash.org/${data.id}:6c5e:357f:e274:dd4:78bb:b35f:924d.png`; // I decided to fetch some random images from the url to make it more visually appealing
  const [isOpen, setIsOpen] = useState(false);
  return (
    // each card is clickable and it expands showing more information about each contact, we do this by maintaining a state for each card
    <motion.div  className="contact-card" onClick = {() => setIsOpen(!isOpen)}>
      <motion.section transition= {{layout: {duration: .7, type: "spring"}}} layout className="contents">
        <motion.div layout="position" className="header">
          <motion.img src={image} alt="Picture of the user" width="100" height="100" />
          <motion.div className="contact-name" numberOflines={1}>
            <motion.h1>{data.name}</motion.h1>
            <motion.h2>@{data.username}</motion.h2>
          </motion.div>
        </motion.div>
        {/* is the card is clicked on the card will expand , as itOpen will be set to true once a user clicks on it , ( and it will be set to false once the user clicks again) */}
        {isOpen ? (<div className="contact-info">
          <motion.h3>Email: {data.email}</motion.h3>
          <motion.h3>Number: {data.phone}</motion.h3>
        </div>) : (<div/>)}
  
      </motion.section>
    </motion.div>
  );
}

export default ContactCard;
