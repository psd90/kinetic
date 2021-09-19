import React, { Component } from 'react';
import axios from 'axios';
import DocCard from '../docCard';


// dCollection component calls to API and sets the documents rendering a document card

class DocCollection extends Component  {
    state = {
        docs : []
    }

    fetchDocs = () => {
        axios('https://api.teamkinetic.co.uk/techtest/volunteer.htm?action=getProfileDoc&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9', {
  method: 'GET',
  headers: {
    'key' : '16F1D714-C22F-4464-84F4-C463S657GAAF',
    'pwd' : 'kAjj9rPrxE6QYzj/47/oyQ==',
  }
})
.then(res => {
    this.setState({
        docs: res.data[0].Results
    }, ()=>{
        console.log('documents:', this.state.docs)
    })
})
}

componentDidMount(){
    this.fetchDocs()
}

    render() {
      
        const {docs} = this.state
        return (
            <div className="document-list">
                <nav>
                    <h2>Uploaded Documents</h2>
                    {docs.map(docs => {
                        return <DocCard {...docs} key={docs.index}/>
                    })}                   
                </nav>
            </div>
        )
}
}
export default DocCollection;