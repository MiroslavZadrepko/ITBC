import Osoba from "./Osoba";

const Content = ({osobe}) => {
    return (
        <>
           {osobe.map(osoba => <Osoba key={osoba.ime} osoba={osoba.ime} pice ={osoba.pice}/>)}
        </>
    );
}

export default Content;