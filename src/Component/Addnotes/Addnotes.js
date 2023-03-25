

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../Addnotes/Addnotes.css"


export default function AddNote() {

    const [title,setTitle]= useState()
    const [description,setDescription] = useState()
 const navigate = useNavigate()






const Addnotes=(e)=>{
    e.preventDefault()
    console.log(title,description)
   
    fetch("/ADDNOTES",{
        method:"post",
        headers:{
"content-type":"application/json",
"Authorization":"Bearer" + localStorage.getItem("jwt")

        },
        body:JSON.stringify({
         title,description
        })
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.err){
            alert(data.err)
        }else{
            navigate("/Homepage")
        }
    })
    //setData({...data,title,description})

   
   

}


    return (


        <>
            <div className="notes">
                <nav className="navbar">
                    <ul className="ul">
                       <Link to="/Homepage" ><li className="li">Home</li></Link>
                        <li className="li"> + Add Note</li>
                        <li className="li"> X Delete</li>
                        <li className="li">Export</li>
                    </ul>
                </nav>

                <form className="addnotes">
                    <label>Title</label>
                    <input className="tit" type="text" placeholder="enter the title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    <label>Description</label>
                    <textarea className="des" type="text" placeholder="enter the Description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
                </form>
                <div className="button-1">
                    <button onClick={(e)=>Addnotes(e)} className="btn">Add Notes</button>
                </div>

            </div>
        </>
    )
}