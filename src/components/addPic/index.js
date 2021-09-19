import React, {useState, useEffect} from 'react'
import axios, { post } from 'axios';

const AddPic = () => {

    const [baseImage, setBaseImage] = useState("")
    const [binary, setBinary] = useState("")
 

    const uploadImage = async (e)=>{
        const file = e.target.files[0];
       const base64 = await convert64(file)
       setBinary(base64)
       setBaseImage(base64)
    }
    console.log(binary)



    const convert64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);


        fileReader.onload = ()=>{
            resolve(fileReader.result)
        }
        fileReader.oneerror =(error) =>{
            reject(error)
        }
    })
}

const postPic = () => {
    axios(`https://api.teamkinetic.co.uk/techtest/volunteer.htm?action=putProfileImage&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9&profileImage=${binary}`, {
method: 'POST',
headers: {
    'Content-Type' : "application/json",
'key' : '16F1D714-C22F-4464-84F4-C463S657GAAF',
'pwd' : 'kAjj9rPrxE6QYzj/47/oyQ==',
'Content-type': 'multipart/form-data',
}
})
.then(res => {
console.log(res)
})
}



    return(
        <div>
        
            <form>
            <input
            type="file"
            onChange={(e) =>{
                uploadImage(e)
            }}></input>
            </form>
            <br></br>
            <img src={baseImage} height="200px"/>
            <button onClick={()=>postPic()}>UPLOAD</button>
        </div>
    )
}

export default AddPic