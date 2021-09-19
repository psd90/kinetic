import React, {useState, Component, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import moment from "moment";




const SessionCard = (props) => {
    
    
    const[startTime, setStartTime] = useState()
    const[date, setDate] = useState()

    const id = props.PLACEMENTID
    const preview = props.NAME + '..'
  
    useEffect(()=>{
        axios(`https://api.teamkinetic.co.uk/techtest/opps.htm?action=sessionDetails&loggedIn=1&oppID=${id}&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9`, {
  method: 'GET',
  headers: {
    'key' : '16F1D714-C22F-4464-84F4-C463S657GAAF',
    'pwd' : 'kAjj9rPrxE6QYzj/47/oyQ==',
  }
})
.then(res => {
  setStartTime(res.data[0].Results[0].PLACEMENTSLOTSTARTTIME)
  setDate(res.data[0].Results[0].PLACEMENTSLOTDATE)
})
}, [])

function formatDate(date){
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var dateMomentObject = moment(date, "DD/MM/YYYY");
  var fDate = dateMomentObject.toDate(); 
  var stringDate = fDate.toDateString()
  var day = days[fDate.getDay()]
  var month = months[fDate.getMonth()]
  var formattedDate = stringDate.slice(8, 16)
  var fullDate = (day + " " + formattedDate.slice(0,2) + " " + month + " " + formattedDate.slice(3,7))
  return fullDate
}
const newDate = (formatDate(date));


if(date===undefined){
  return (
    <section className="SessionCard">
      <p>Please wait..</p>
    </section>
  )
}else{
  return (
  <section className="SessionCard">
      <p>{startTime} , {newDate}</p>
      <p>{preview}</p>
     <Link to={
       {
       pathname: '/opportunity-dashboard/' + id,
      }
      } > 
      <br/>
      <button>MANAGE</button>
      </Link>
  </section> 
  )
}};

export default SessionCard;
