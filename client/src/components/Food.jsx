import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios'; 
import background from "../imgs/Resized_VM_pic.jpg";
import hopeimg from "../imgs/maui.jpg"
import migtriggerS from "../imgs/migtriggerS.png"
import migfood from "../imgs/migfood.jpg"
import magnesium from "../imgs/magnesium.jpg"
import tenfoods from "../imgs/tenfoods.jpg";




const Food = props => {
    const [dizzy, setDizzy] = useState([]);   

    const stylePic = { 
        width: "200px",
        height: "300px",
        display: "flex",
        fontSize: "500px"
    };  

    return ( 
        <div style={{backgroundColor: "green", backgroundImage: `url(${hopeimg})`  }} >
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px"}}>  

            <h1 className={stylePic} style={{width: "700px",
        height: "100px",
        display: "flex",
        fontSize: "70px"}} > Dizzy Life </h1> 
            <Link to={'/dizzylife/'}> Return Home </Link>
            </div>

            <h2 style={{textAlign: "left", marginLeft: "100px"}} > 
                Living with Vestibular Migraine makes it hard to know what's safe to eat. We're here to help. Here are general guidelines 
                
            </h2>   
            
            <div  style={{alignItems: "center", border: "", width: "100%", height: "100%"  }}> 

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} >

                <div style={{ fontSize:"30px", color: "white", border: "", width: "500px", height: "500px", backgroundImage: `url(${migtriggerS})`  }}   >  </div> 

                

                <div style={{ border: "", width: "500px", height: "500px", backgroundImage: `url(${tenfoods})`  }} > Advice </div> 

                </div>

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} >

                <div style={{ border: "", width: "500px", height: "500px", backgroundImage: `url(${migtriggerS})`  }} > eCommerce </div>

                
                
                <div style={{ border: "", width: "500px", height: "500px", backgroundImage: `url(${magnesium})`  }} > Foods to Eat </div> 

                </div>
            
            </div>
        </div>
    )
}

export default Food;