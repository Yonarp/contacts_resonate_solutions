/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import {motion} from 'framer-motion'

function ContactCard({ data }) {
  const image = `https://robohash.org/${data.id}:6c5e:357f:e274:dd4:78bb:b35f:924d.png`;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div  className="contact-card" onClick = {() => setIsOpen(!isOpen)}>
      <motion.section transition= {{layout: {duration: .7, type: "spring"}}} layout className="contents">
        <motion.div layout="position" className="header">
          <motion.img src={image} alt="Picture of the user" width="100" height="100" />
          <motion.div className="contact-name" numberOflines={1}>
            <motion.h1>{data.name}</motion.h1>
            <motion.h2>@{data.username}</motion.h2>
          </motion.div>
        </motion.div>
        {isOpen ? (<div className="contact-info">
          <motion.h3>Email: {data.email}</motion.h3>
          <motion.h3>Number: {data.phone}</motion.h3>
        </div>) : (<div/>)}
  
      </motion.section>
    </motion.div>
  );
}

export default ContactCard;
