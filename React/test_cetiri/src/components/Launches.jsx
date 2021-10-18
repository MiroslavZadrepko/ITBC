import Launch from "./Launch";

const Launches = ({launches}) => {
    return ( 
    <div className = 'launches'>
        {launches.map(launch => <Launch key={launch.id} launch={launch}/>)}
    </div> );
}
 
export default Launches;