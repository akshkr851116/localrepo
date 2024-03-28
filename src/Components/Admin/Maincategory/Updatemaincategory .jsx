import React, { useEffect, useState } from 'react'
import Breadcrum from '../../Breadcrum'
import Sidebar from '../Sidebar'
import formvailidation from '../formvailidation/Formvailidation'
import { useNavigate, useParams } from 'react-router-dom'

export default function Updatemaincategory() {
  let {id}=useParams()
  let [name, setName]=useState("")
  let [errorMessage,setErrorMessage]=useState("Name field is Mendatory")
  let [show,setShow]=useState(false)
  let [data,setData]=useState([])
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
      let item=data.find((x)=>x.name.toLowerCase()=== name.toLowerCase())
      if(item){
        setErrorMessage("Maincategory Name is Already exist")
        setShow(true)
      }
      else{
        let response= await fetch("http://localhost:8000/maincategory/"+id,{
          method:"put",
          headers:{
            "content-type":"application/json"//For multiple data ,not mandatory
          },
          body:JSON.stringify({name:name,id:id})
        })
        response = await response.json()
        navigate("/admin/Maincategory")  
      }
       

    }
    else{
      setShow(true)

    }
  }
 async function getApidata(){
  let response= await fetch("http://localhost:8000/maincategory",{
    method:"get",
    headers:{
      "content-type":"application/json"//For multiple data ,not mandatory
    },
  })
  response = await response.json()
  setData(response)
 let item=response.find((X)=>X.id===id)
  setName(item.name)
 }
 useEffect(()=>{getApidata()},[])
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
                    <input type="text" name="name" value={name} onChange={getInputData} placeholder='Maincategory Name' id="uname" className='form-control'/>
                    {show?<p className='text-danger py-2 px-1 text-capitalize'>{errorMessage}</p>:""}
                  </div>
                  <div className="mb-3">
                    <button type='submit' className='btn btn-primary w-100'>Update</button>
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