import "../HomePage/Homepage.css"
import { Link, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react";
import Data from "../Showdata/data"


export default function Homepage() {
    const navigate = useNavigate()
    const [notes, setNotes] = useState([])
    const [serachResults, setSearchResults] = useState([])
    const [searchText, setSearchtext] = useState("")


    useEffect(() => {


        fetch("/Getnotes", {
            method: "get",
            headers: {
                "content-type": "application/json",
                // "Authorization": "Bearer" + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setNotes(data)
            })
    }, [notes])


     const searchHandler = (e) => {
        e.preventDefault();
        setSearchtext(e.target.value)
        const search = e.target.value;
        fetch(`//Search/${search}`, {
            method: "GET",
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setSearchResults(data)
            })

     }



    return (
        <>
            <div className="content">

                <nav className="navbar">
                    <ul className="ul">
                        <li className="li">Home</li>
                        <li className="li" onClick={()=>navigate("/Addnotes")}> + Add Note</li>
                        <li className="li" > X Delete</li>
                        <li className="li">Export</li>
                    </ul>
                </nav>
                <div className="input">
                    <input className="inp" type="text" placeholder="Search here" value={searchText} onChange={(e) => searchHandler(e)} name="search" />
                </div>

                <div className="data">
                    {
                        searchText.length < 1 ?
                            notes.map((data) => {
                                return (
                                    <Data data={data} />
                                )
                            }) :
                            serachResults.map((data) => {
                                return (
                                    <Data data={data} />
                                )
                            })

                    }

                </div>

            </div>
        </>
    )
}