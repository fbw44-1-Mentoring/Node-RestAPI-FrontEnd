import React, { useState } from 'react'

export default function LoginSignup() {
    const [status,setStatus]=useState(false)
    const [user, setUser]=useState(null)

    const signupUser=(e)=>{
        //prevent default behavior
        e.preventDefault()

        let userData = {
            username: e.target.elements["username"].value, 
            password:e.target.elements["password"].value , 
            email: e.target.elements["email"].value
        }
        console.log(userData)

        fetch("http://localhost:4000/users", 
        {
         method:"POST",
         headers:{"Content-Type":"application/json"},
         body:JSON.stringify(userData)}
        ).then(res=>res.json()) //parsing json data
        .then(result=>console.log(result))
    }

    //for login user
        const loginUser=(e)=>{
            e.preventDefault()
            let userData= {
                username: e.target.elements["username"].value,
                password:e.target.elements["password"].value
            }
            fetch("http://localhost:4000/users/login", 
            {
                method:"POST", 
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(userData)
        }).then(res=>
            {
                let token = res.headers.get("code")
                localStorage.setItem("code",token )
                return res.json() }
            )
        .then(result=>  {
            setUser(result.user)
        }  )

        }

    return (
        <div style={{width:"33%"}}>
            {  status?  
                        user ? 
                            <div> <h2>Profile Page</h2>
                            <h3>Hi, {user.username}</h3> 
                            <button onClick={()=>{setUser(null) 
                             ; 
                            localStorage.removeItem("code")}}>logout</button> </div> 
                        
                        :
                        <div className="login">
                         <h2>Login Page</h2>
                            <form onSubmit={loginUser}>
                            <label>UserName</label>
                            <input type="text" name="username" /><br />
                            <label>Password</label>
                            <input type="password" name="password" /><br />
                            <button type="submit">login</button>
                            </form>

                        <p>Dont have account yet? </p>
                        <button onClick={()=>setStatus(!status)}>Signup</button>
                        </div> 

            : <div className="signup">
                <h2>Signup Page</h2>
                <form onSubmit={signupUser}>
                    <label>UserName</label>
                    <input type="text" name="username" /><br />
                    <label>Password</label>
                    <input type="password" name="password" /><br />
                    <label>Email</label>
                    <input type="email" name="email" /><br />
                    <button type="submit">Signup</button>
                </form>

                <p>Already have an account? </p>
                <button onClick={()=>setStatus(!status)}>Login</button>
            </div> }
           

            


        </div>
    )
}
