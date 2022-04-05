import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios'; 
import background from "../imgs/Resized_VM_pic.jpg";



const Specialist = props => {
    const [dizzy, setDizzy] = useState([]);   

    const stylePic = { 
        width: "200px",
        height: "300px",
        display: "flex"
    };  

    return ( 
        <div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px"}}>  

            <h1 className={stylePic} > Find A Specialist </h1> 
            <Link to={'/dizzylife/'}> Return Home </Link> 
            </div>

            <h2 style={{textAlign: "left", marginLeft: "100px"}} > 
                
                <Link to= {{ pathname: "https://www.healthline.com/health/vestibular-migraine" }} target="_blank" > rare condition 
                </Link>.
            </h2>   
            
            <div  style={{alignItems: "center", border: "3px solid green", width: "1300px", height: "500px"  }}> 

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} >

                <div style={{ color: "red", border: "2px solid blue", width: "300px", height: "200px", backgroundImage: `url(${background})`  }}   > What is VM? </div> 

                <div style={{ border: "2px solid blue", width: "300px", height: "200px" }} > <Link to={"/Specialist/"} > Specialist Triggers </Link> </div  >        

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

export default Specialist;