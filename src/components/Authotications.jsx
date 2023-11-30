
import React from "react"; 

export default function Authentication(props){

    const {email, setEmail, password, setPassword, isAuthenticated setIsAuthenticated} = props

    function handleSubmit() {

        if(email && password) {
            setIsAuthenticated(true)
        }
       
    }

    return(
        <>
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label for="email">Email</label> 
                <input type="email" onChange={(e) => setEmail(e.target.value)} /> 

                <label for="password"  >password </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} /> 

                <button type="submit" onClick={handleSubmit}>SignIn</button>
            </form>
        </div>
        
        </>
    )
}