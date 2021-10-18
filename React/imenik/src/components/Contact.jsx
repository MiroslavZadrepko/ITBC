const Contact = ({contact}) => {
    return ( 
        <li>
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
        </li>
     );
}
 
export default Contact;