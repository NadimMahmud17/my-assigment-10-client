import React from 'react';
import "./Description.css";
import { useParams } from 'react-router';
import pic1 from "../../images/Details/picture-1.jpg"
import pic2 from "../../images/Details/picture-2.jfif"
import pic3 from "../../images/Details/picture-3.jfif"


const Description = () => {
    const {servicsId} = useParams();
    
    return (
        <div>
            <div className="back"> 
            <h3>Card Number : {servicsId}</h3>
            <div className="boder">
                <img className="boder" src={pic1} alt="" srcset="" />
            </div>
            
        <p className="boder">  Cosmetic fillings, or tooth- colored fillings, are made of composite resin and glass particles. They are cemented onto the existing teeth using a bonding agent. Cosmetic fillings can improve the appearance of your smile. Unlike silver-colored fillings, cosmetic fillings look just like your natural teeth.

        </p>

          <div className="d-flex justify-content-around boder">
                <div>
                    <img className="boder" src={pic2} alt="" srcset="" />
                </div>
                    <div>
                        <img className="boder" src={pic3} alt="" srcset="" />
                </div>
          </div>
            </div>
            

        </div>
    );
};

export default Description;