import React,{useState} from "react";
import ContactCard from "../../components/ContactCard/ContactCard";





  
function ContactScreen({props}) {
    const [searchTerm , setSearchTerm] = useState('')
  return (
    <div className="container">
      <div className="search-form">
        <input type="text" className="search-bar" placeholder="Search Your Contacts By Name.." onChange = {(event) => {
            setSearchTerm(event.target.value);
        }}/>
        </div>
      <div className="contact-section">
        {props.filter((item) => {
            if (searchTerm == ''){
                return item
            }else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return item
            }
        }).map(item => {
            return (
                <ContactCard key = {item.id} data= {item}/>
            )
        })}
      </div>
    </div>
  );
}

export default ContactScreen;
