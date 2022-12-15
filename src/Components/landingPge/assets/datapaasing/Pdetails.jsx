import React from 'react'
import { useState, useEffect } from 'react';

const Pdetails = ({data, setData}) => {

    const [formValues, setFormValues] = useState([]);

    let pDetail = (event)=>{
        event.preventDefault();
        // setFormValues();
        let form = new FormData(event.target);
        let JSONform = {};
        for(const key of form.keys()){
            JSONform[key] = form.get(key);
        }
        console.log(JSONform);
        setData({...data,...JSONform});
        console.log(JSONform);
    }

    useEffect(() => {
        localStorage.setItem("formValues", JSON.stringify(formValues));
        console.log(formValues)
      }, [formValues]);
  return (
   <>
    <h1>somoo</h1>


<form action="" onSubmit={pDetail}>
        <div className='form-group'>
            <label htmlFor="UName">Name</label>
            <input type="text"
            placeholder='Your Name'
            name='UName' 
            id='UName'
            
            />
        </div>

        <button type='submit'>Submit</button>
</form>
   
   </>
  )
}

export default Pdetails