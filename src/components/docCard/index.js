import React from "react";
import {Link} from 'react-router-dom';




const DocCard = (props) => {
    const id = props.ID
    const name = props.DESCRIPTION



    return (
    <section className="doc-card">
        <p>{name}</p>
        
       <Link to={
         {
         pathname: '/'
        }
        } > 
        <br/>
        <button>{id}</button>
        </Link>
    </section> 
    )
  };
  
  export default DocCard;