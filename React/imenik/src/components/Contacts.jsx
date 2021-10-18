import Contact from "./Contact";

const Contacts = ({contacts}) => {
    return ( 
        <ul>
            {contacts.map(contact => <Contact key={contact.id} contact={contact}/>)}
        </ul>
     );
}
 
export default Contacts;