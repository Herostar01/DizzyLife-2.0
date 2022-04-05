import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios'; 
import background from "../imgs/VM_pic.jpg";



const Advice = props => {
    const [dizzy, setDizzy] = useState([]);

    

    return ( 
        <div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px"}}>  

            <h1> Dizzy Life </h1>
            <Link to={'/pets/'}> Return To Index </Link>
            </div>

            <h2 style={{textAlign: "left", marginLeft: "100px"}} > 
                Welcome to Dizzy Life, a health site for special  people with a 
                <Link to= {{ pathname: "https://www.healthline.com/health/vestibular-migraine" }} target="_blank" > rare condition 
                </Link>.
            </h2>   
            
            <div  style={{alignItems: "center", border: "3px solid green", width: "1300px", height: "500px"  }}> 

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} >

                <div style={{ color: "red", border: "2px solid blue", width: "300px", height: "200px", backgroundImage: `url(${background})` }}   > Food </div>

                <div style={{ border: "2px solid blue", width: "300px", height: "200px" }} > What is VM? </div>

                <div style={{ border: "2px solid blue", width: "300px", height: "200px" }} > Advice </div> 

                </div>

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} >

                <div style={{ border: "2px solid blue", width: "300px", height: "200px" }} > eCommerce </div>

                <div style={{ border: "2px solid blue", width: "300px", height: "200px" }} > "Treatment" </div>
                
                <div style={{ border: "2px solid blue", width: "300px", height: "200px" }} > Find a Specialist </div> 

                </div>
            
            </div>
        </div>
    )
}

export default Advice;