import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import axios from 'axios';



class AddDoc extends Component{

    url = `https://api.teamkinetic.co.uk/techtest/opps.htm?action=putProfileDoc&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9&doctype=document&description=nothing&file=`

    constructor(props) {
        super(props);
        this.state = {
            docData: ''
            }
    }

    handleDoc = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsBinaryString(files[0]);
            reader.onload=(e)=>{
            this.state.docData = e.target.result;
        }
    }
    

    // Image/File Submit Handler
    handleSubmitFile = () => {

        
            console.log(this.state.docData)
          
            // the image field name should be similar to your api endpoint field name
            // in my case here the field name is customFile

            axios.post(
                this.url + this.state.docData,
                {
                    headers: {
                        'key' : '16F1D714-C22F-4464-84F4-C463S657GAAF',
                        'pwd' : 'kAjj9rPrxE6QYzj/47/oyQ==',
                    },                    
                }
            )
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        
    }

// BLOCKED CORS
    
//      onChange = (e) =>{
//         let files = e.target.files;
//         let reader = new FileReader();
//         reader.readAsBinaryString(files[0]);
//         return reader.onload=(e)=>{
//             state.file = e.target.result;
//         }
//     }
    
//      Upload = () => {
//         axios(`https://api.teamkinetic.co.uk/techtest/opps.htm?action=putProfileDoc&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9&doctype=document&description=nothing&file=`, {
//         method: 'PUT',
//         headers: {
//             'key' : '16F1D714-C22F-4464-84F4-C463S657GAAF',
//             'pwd' : 'kAjj9rPrxE6QYzj/47/oyQ==',
//         }
//     })
//     .then(res => {
//         console.log(res)
//     })
// }

    

    render(){

    return (
            <div className="add-doc">
               <h2 class="doc-title">Supporting Documents</h2>
               <Collapsible trigger="ADD">
                   <p className="notice">Any documents you upload will be available to view by the providers of opportunities that you join</p>
               <div class="doc-form" >
                 <p>Document Type</p>
                 <select name="doc-type" id="doc-type">
                    <option value="identification">Identification</option>
                    <option value="qualification">Qualification</option>
                    <option value="cv">CV</option>
                    <option value="something else">Something Else</option>
                 </select>
                 <p>Description</p>
                 <div>
              

                {/* image input field */}
                <input
                    type="file"
                    onChange={this.handleDoc}
                />
                <input type="submit" onClick={this.handleSubmitFile} value="Submit"/>
            </div>
               </div>
              
               </Collapsible>
            </div>
    )
    }
}

export default AddDoc;