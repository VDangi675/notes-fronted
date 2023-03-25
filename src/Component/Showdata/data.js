import react from "react"
import "../Showdata/data.css"

export default function Data({data}){
    return (
        <>
        <div className="content">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        </div>
       
        </>
    )
}