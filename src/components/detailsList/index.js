import React, {useState, Component, useEffect } from 'react';
import { useParams } from "react-router-dom";
import moment from "moment";
import axios from 'axios';


// DetailsList calls to API and sets the sessions rendering a session details card

const DetailsList = () => {
    console.log()
    const { id } = useParams();
    const[details, setDetails] = useState()
    
    useEffect(()=>{
    axios(`https://api.teamkinetic.co.uk/techtest/opps.htm?action=sessionDetails&loggedIn=1&oppID=${id}&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9`, {
        method: 'GET',
        headers: {
            'key' : '16F1D714-C22F-4464-84F4-C463S657GAAF',
            'pwd' : 'kAjj9rPrxE6QYzj/47/oyQ==',
        }
    })
    .then(res => {
        setDetails(res.data[0].Results)
})
}, [])


//function to join session

const JoinSession = ({PLACEMENTSLOTID}) => {
   
        axios(`https://api.teamkinetic.co.uk/techtest/opps.htm?action=joinSession&oppID=${id}&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9&slotID=${PLACEMENTSLOTID}`, {
            method: 'GET',
            headers: {
                'key' : '16F1D714-C22F-4464-84F4-C463S657GAAF',
                'pwd' : 'kAjj9rPrxE6QYzj/47/oyQ==',
            }
        })
        .then(res => {
            console.log(res)
            window.location.reload()
    })
    
}

const LeaveSession = ({PLACEMENTSLOTID}) => {
   
    axios(`https://api.teamkinetic.co.uk/techtest/opps.htm?action=leaveSession&oppID=${id}&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9&slotID=${PLACEMENTSLOTID}`, {
        method: 'DELETE',
        headers: {
            'key' : '16F1D714-C22F-4464-84F4-C463S657GAAF',
            'pwd' : 'kAjj9rPrxE6QYzj/47/oyQ==',
        }
    })
    .then(res => {
        console.log(res)
        window.location.reload()
})

}


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
 

//render the list of detailCards
if(!details){
    return(
        <div className="detailsList">
            <h1>LOADING</h1>
        </div>
    )
}
else{
return(
    <div className="detailsList" >
        <h2>Sessions </h2>
       {details.map(({PLACEMENTSLOTDATE, PLACEMENTSLOTSTARTTIME, PLACEMENTSLOTHOURS, NUMBERVOLS, PLACEMENTSLOTID}) => {
           const newDate = (formatDate(PLACEMENTSLOTDATE));
           if(NUMBERVOLS === 0){
           return (
               <div className="detailCard" key={details.index}>
                   <h3>{newDate}</h3>
                   <p>Starts at {PLACEMENTSLOTSTARTTIME} for {PLACEMENTSLOTHOURS} hrs </p>
                   <button onClick={()=> JoinSession({PLACEMENTSLOTID})} className="join">JOIN</button>
                   <p className="slot-number">10 slots of 10 left</p>
               </div>
           )
}else{
    return (
        <div className="detailCard" key={details.index}>
            <h3>{newDate}</h3>
            <p>Starts at {PLACEMENTSLOTSTARTTIME} for {PLACEMENTSLOTHOURS} hrs </p>
            <button onClick={()=> LeaveSession({PLACEMENTSLOTID})} className="leave">LEAVE</button>
        </div>
    )
}})}
    </div>
)
}
}

export default DetailsList;