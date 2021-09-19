import React, { Component } from 'react';
import axios from 'axios';
import SessionCard from '../sessionCard';


// Sessions component calls to API and sets the sessions rendering a session card

class Sessions extends Component  {
    state = {
        sessions : []
    }

    fetchSessions = () => {
        axios('https://api.teamkinetic.co.uk/techtest/search.htm?recordsPerPage=&recordsPage=&lat=&lng=&orderResultsBy=&search=&showShared=&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9', {
  method: 'GET',
  headers: {
    'key' : '16F1D714-C22F-4464-84F4-C463S657GAAF',
    'pwd' : 'kAjj9rPrxE6QYzj/47/oyQ==',
  }
})
.then(res => {
    this.setState({
        sessions: res.data[0].Results
    }, ()=>{
        console.log('sessions:', this.state)
    })
})
}

componentDidMount(){
    this.fetchSessions()
}

    render() {
        const {sessions} = this.state
        return (
            <div className="sessions">
                <nav>
                    <h2>Upcoming Sessions</h2>
                    {sessions.map(session => {
                        return <SessionCard {...session} key={session.index}/>
                    })}                   
                </nav>
            </div>
        )
}
}
export default Sessions;