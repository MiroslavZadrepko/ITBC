const Ukupno = ({pica}) => {

    return ( 
        <p>Укупно пића: {pica.reduce((zbir,pice)=>{return zbir + pice},0)}</p>
     );
}
 
export default Ukupno;