import React  from "react"; 
import { useNavigate } from "react-router-dom";

function Home(){  
    const navigate = useNavigate();
    
    const onClickLoginHandler  = () =>{
        navigate("/login");
    }
    const onClickSignupHandler  = () =>{
        navigate("/signup");
    }
    
    return (
        <div>
            <h1>This is Home Page</h1>
            <button onClick={onClickLoginHandler}>Login</button>
            <button onClick={onClickSignupHandler}>Signup</button>

        </div>
    )
}

export default Home;