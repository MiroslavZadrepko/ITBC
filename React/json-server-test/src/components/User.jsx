const User = ({user}) => {

    return ( 
        <>
            <p>{user.first_name}</p>
            {user.avatar?<img src={user.avatar} alt="avatar" />:''}
        </>
     );
}
 
export default User;