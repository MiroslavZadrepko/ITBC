import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { getAllUsers } from "../service";

const Login = ({setUser}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const history = useHistory()

    return ( 
        <>
        
            <form onSubmit={(e)=>{
                e.preventDefault()
                getAllUsers().then(res => {
                    let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                    if(user){
                        setUser(user)
                        history.push('/quotes')
                    }else{
                        console.log('Neispravni podaci');
                    }  
                })
         
            }}>
                <input type="text"  placeholder="Username/Email..." onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="password" placeholder="Password..." onChange={(e)=>{setPassword(e.target.value)}} />
                <input type="submit" value="LogIn" />
            </form>
            <div>
                <Link to="/register">Not registred?</Link>
            </div>
        </>
     );
}
 
export default Login;