import React from 'react'
import Breadcrum from '../../Breadcrum'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
export default function Adminhome() {
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
                <h5 className='bg-primary text-light text-center p-2'>Admin Section</h5>
               </div>
               <div className="col-md-6"><img src="/img/noimg.jpg" style={{height:"300px", width:"100%"}} alt=""/></div>
               <div className="col-md-6">
                  <table className='table table-bordered'>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>Akash Singh</td>
                      </tr>
                      <tr>
                        <th>User name</th>
                        <td>Akash</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>akshkr8511@gmil.com</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>9122994814</td>
                      </tr>
                     <tr>
                      <td colSpan={2}><Link to="/profile/update" className='btn btn-primary w-100'>Update profile</Link> </td>
                     </tr>
                    
                    </tbody>
                  </table>
                </div>
            </div>
          </div>
       
      </div>
    </div>
      
    </>
  )
}
