import React, { useState } from 'react'

export default function LoginSignup() {
    const [status,setStatus]=useState(false)
    return (
        <div style={{width:"33%"}}>
            {status? <div className="login">
                <h2>Login Page</h2>
                <form>
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
                <form>
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
