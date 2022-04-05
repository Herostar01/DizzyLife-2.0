import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios'; 
import background from "../imgs/Resized_VM_pic.jpg";
import docWorld from"../imgs/docWorldSmall.jpg";
import SuppS from "../imgs/suppS.jpg"
import waterfall from "../imgs/waterfallS.jpg" 
import headache from "../imgs/headacheS.jpg"
import food from "../imgs/foodS.jpg"
import comment from "../imgs/commentS.jpg"
import hopeimg from "../imgs/maui.jpg"
import law from "../imgs/Law.jpg";
import logo from "../imgs/ranalogos.jpg";
import suit from "../imgs/suitS.jpg";
import cvJet from "../videos/CVJet.mp4";



const Rana = props => {
    const [dizzy, setDizzy] = useState([]);

    const stylePic = { 
        width: "450px",
        height: "500px",
        display: "flex"
    };

    return ( 
        
        <div style={{backgroundColor: "green", backgroundImage: `url(${law})`  }} >
            
            <div style={{display: "flex", height: "200px", marginBottom: "30px", opacity: "0.79", backgroundColor: "black", color: "white", border: "1px solid black", alignItems: "center", justifyContent: "space-around", margin: "20 px 20 px", padding: "15px"}}>  

            <div >
            <h1 style={{ fontSize: "30px"}} > Capt. Inderpreet S. Rana, Esq. </h1>
            

            
            <div style={{ width: "100px", height: "96px", borderRadius: "55%", backgroundImage: `url(${logo})` }} >  </div>
            </div>

            <p> Home </p>
            <p> The Team </p>
            <p> Practice Area </p> 
            <p> Resources </p>
            <p> Contact Us </p>

            </div> 

            <h2 style={{textAlign: "left", marginLeft: "100px"}} > 
                
            </h2>   


            
            <div  style={{alignItems: "center", border: "", width: "100%", height: "100%"  }}> 

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} > 

                

                <div style={{ fontSize: "40px",  border: "", width: "500px", height: "450px" }} > <Link to={"/food/"} >   </Link> </div  >        

                <div style={{ opacity: "0.79", backgroundColor: "black", color: "white", border: "1px solid black",  border: "", width: "500px", height: "450px", display: "", justifyContent: "flex-end" }} > 
                <div style={{ fontSize: "40px"}} > 
                Home Page Statement
                <video src={cvJet} width="600" height="300" controls="controls" autoplay="true" />
                </div>  
                </div> 

                </div>

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} > 

                <div style={{ fontSize: "40px", border: "", width: "500px", height: "450px" }} >  </div>

                <div style={{ opacity: "0.79", backgroundImage: `url(${suit})`, border: "", width: "500px", height: "450px" }} >
                    <div style={{  fontSize: "40px", backgroundColor: "", color: "white"}} > <Link to={'/hope/'} > Accomplishments </Link> </div>  
                    </div> 
                
                

                </div> 
            
            </div>
        </div>
    )
}

export default Rana;