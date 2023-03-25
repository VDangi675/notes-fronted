

import "../Signup/signup.css"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Confirmpassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    const SignUpHandler = (e) => {
        e.preventDefault()
        console.log(email, password, Confirmpassword)
        fetch("/SIGNUP", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email, password, Confirmpassword
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                    alert(data.message)
                    navigate("/signin")
                }
            })
    }

    return (
        <>
            <div className="container">
                <form className="form" onSubmit={(e) => SignUpHandler(e)}>
                    <h1>Sign UP</h1>
                    <div className="inputfeilds-s">
                        <input className="em" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter the email here" name="email"/>

                        <input className="pwd" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter the password"  name="password"/>

                        <input className="cpwd" type="password" value={Confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}   placeholder="enter the confirmpassword" name=' confirm password' />

                    </div>
                    <div className="button">
                        <button className="btn-1">Continue</button>
                    </div>
                    <h4> I Agree with <a href="#">Terms & Condition</a></h4>
                </form>
            </div>

        </>
    )
}