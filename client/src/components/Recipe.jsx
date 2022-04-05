import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import hopeimg from "../imgs/maui.jpg"


export default () => {
    //keep track of what is being typed via useState hook

    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [person, setPerson] = useState({});
    const { id } = useParams();

    
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true); 
            })
            .catch(err => console.log(err));
    }, []); 


    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
        // filter takes in given array and creates new array. 2 - creating a function that is impossible to pass
        //it will create an empty array. empty array is now what was originally that person. rather than deleting an object, we are voiding it. When you hand back voided object to be read by get function. it will handback no bcuz it's empty 

    } 
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.log(err));
    }
    


    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        setTitle("");
        setPrice('');
        setDescription("");
    }
    
    //onChange to update firstName and lastName
    return (
            <div style={{backgroundColor: "green", backgroundImage: `url(${hopeimg})`, width: "1800px", height: "1200px"  }} >
        <form onSubmit={onSubmitHandler}>
            <p>
                <label style={{  fontSize: "25px"}}> Recipe Name </label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label style={{  fontSize: "25px"}} > Ingedients </label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label style={{  fontSize: "25px"}} > Steps </label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>

            <input type="submit"/>
        </form>

        

        

        <div>
            {people.map((person, idx) => {
                return <p key={idx} style={{backgroundColor: "white", width: "100%", opacity: ".75", fontSize: "15px"}} >
                    
                        <p style={{  fontSize: "25px"}} >
                            {person.title}
                        </p>
                        <p>
                            {person.price}
                        </p>
                        <p>
                            {person.description}
                        </p>
                    
                    <br />
                    {/* <button onClick={(e)=>{deletePerson(person._id)}}>
                        Delete
                    </button>  */}
                </p>
            })}
        </div>

        </div>
    )
}

