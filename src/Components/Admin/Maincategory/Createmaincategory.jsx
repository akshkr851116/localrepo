import React, { useState } from 'react'
import Breadcrum from '../../Breadcrum'
import Sidebar from '../Sidebar'
import formvailidation from '../formvailidation/Formvailidation'
import { useNavigate } from 'react-router-dom'

export default function Createmaincategory() {
  let [name, setName]=useState("")
  let [errorMessage,setErrorMessage]=useState("Name field is Mendatory")
  let [show,setShow]=useState(false)
  let navigate=useNavigate()
  function getInputData(e){
    setName(e.target.value)
    setErrorMessage(formvailidation(e))
    // setShow(false)

  }
 async function postData(e){
    e.preventDefault()
    if(errorMessage.length===0){
      setErrorMessage(errorMessage)
      // alert(name)
      let response= await fetch("http://localhost:8000/maincategory",{
        method:"get",
        headers:{
          "content-type":"application/json"//For multiple data ,not mandatory
        },
      })
      response = await response.json()
      let item=response.find((x)=>x.name.toLowerCase()=== name.toLowerCase())
      if(item){
        setErrorMessage("Maincategory Name is Already exist")
        setShow(true)
      }
      else{
        response= await fetch("http://localhost:8000/maincategory",{
          method:"post",
          headers:{
            "content-type":"application/json"//For multiple data ,not mandatory
          },
          body:JSON.stringify({name:name})
        })
        response = await response.json()
        navigate("/admin/Maincategory")  
      }
       

    }
    else{
      setShow(true)

    }
  }
  return (
    <>
    <Breadcrum title="Admin"/>
    <div className="container-fluid">
      <div className="row">
          <div className="col-3">
            <Sidebar/>
          </div>
          <div className="col-9">
            <div className="row">
             
               <div className="col-md-12">
               <h5 className='bg-primary text-light text-center p-2'>Maincategory<button className='float-end text-light border-0 ' style={{background:"none"}} onClick={()=>window.history.back()} ><i className='fa fa-arrow-left'></i></button></h5>
               <form onSubmit={postData}>
                  <div className="mb-3">
                    <lebel htmlFor="uname">Name<span className='text-danger'>*</span></lebel>
                    <input type="text" name="name" onChange={getInputData} placeholder='Maincategory Name' id="uname" className='form-control'/>
                    {show?<p className='text-danger py-2 px-1 text-capitalize'>{errorMessage}</p>:""}
                  </div>
                  <div className="mb-3">
                    <button type='submit' className='btn btn-primary w-100'>Create</button>
                  </div>
               </form>
               </div>
            </div>
          </div>
       
      </div>
    </div>
      
    </>
  )
}