/* eslint-disable @next/next/no-img-element */
import React from "react";

function ContactCard({ data }) {
  const image = `https://robohash.org/${data.id}:6c5e:357f:e274:dd4:78bb:b35f:924d.png`;
  return (
    <div className="contact-card">
      <section className="contents">
        <div className="header">
          <img src={image} alt="Picture of the user" width="100" height="100" />
          <div className="contact-name" numberOflines={1}>
            <h1>{data.name}</h1>
            <h2>@{data.username}</h2>
          </div>
        </div>
        <div className="contact-info">
          <h3>Email:</h3>
          <p>{data.email}</p>
        </div>
      </section>
    </div>
  );
}

export default ContactCard;
