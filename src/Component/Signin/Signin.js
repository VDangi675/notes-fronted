
import React, { useState } from "react";
import "../Signin/Signin.css"
import { useNavigate} from "react-router-dom";



export default function Signin() {
 
    const navigate =useNavigate()
    const [email,setEmail] = useState("")
    const [password,SetPassword] = useState("")
    const SignInHandler = (e) => {
      e.preventDefault()
      console.log(email, password)
      fetch("/SIGNIN", {
          method: "POST",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify({
              email, password
          })
      }).then(res => res.json())
          .then(data => {
              if (data.error) {
                  alert(data.error)
              }
              else {
                  localStorage.setItem("jwt",data.token)
                  localStorage.setItem("user",JSON.stringify(data.user))
                  alert(data.message)
                  navigate("/Homepage")
              }
          })
  }
  

    return (
        <>
            <div className="container-box">
                <form className="form" onSubmit={(e)=>SignInHandler(e)}>
                    <h1>Sign In</h1>
                    <div className="inputfeilds">
                        <lable>Email</lable>
                        <input className="em" type="text" placeholder="enter the email here" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                       <label>Password</label>
                        <input className="pwd" type="password" placeholder="enter the password" name='password' value={password} onChange={(e)=>SetPassword(e.target.value)} />

                        <h5> <input type="checkbox" /> Remember Me</h5>
                    </div>
                  
                    <div className="button">
                        <button className="btn-2">Submit</button>
                    </div>
                    <h6>Forgot <a href="#"> Password?</a></h6>
                  
                </form>
            </div>

        </>
    )
}