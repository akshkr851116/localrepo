import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
      <div class="list-group">
  <Link to="/" class="list-group-item list-group-item-action active" aria-current="true">
    Admin Home
  </Link>
  <Link to="/admin/user" class="list-group-item list-group-item-action"><i className='fa fa-users' ></i><span className='float-end text-primary'>Users</span></Link>
  <Link to="/admin/maincategory" class="list-group-item list-group-item-action"><i className='fa fa-list' ></i><span className='float-end text-primary'>Maincategory</span></Link>
  <Link to="/admin/subcategory" class="list-group-item list-group-item-action"><i className='fa fa-list' ></i><span className='float-end text-primary'>Subcategory</span></Link>
  <Link to="/admin/brand" class="list-group-item list-group-item-action"><i className='fa fa-tag' ></i><span className='float-end text-primary'>Brand</span></Link>
  <Link to="/admin/product" class="list-group-item list-group-item-action"><i className='fa fa-product-hunt' ></i><span className='float-end text-primary'>Product</span></Link>
  <Link to="/admin/testimonial" class="list-group-item list-group-item-action"><i className='fa fa-star' ></i><span className='float-end text-primary'>Testimonial</span></Link>
  
  <Link to="/admin/newsletter" class="list-group-item list-group-item-action"><i className='fa fa-envelope' ></i><span className='float-end text-primary'>Newsletter</span></Link>
  <Link to="/admin/contact" class="list-group-item list-group-item-action"><i className='fa fa-phone' ></i><span className='float-end text-primary'>ContactUs</span></Link>
  <Link to="/admin/cheackout" class="list-group-item list-group-item-action"><i className='fa fa-shopping-bag' ></i><span className='float-end text-primary'>CheackOut</span></Link>

</div>
    </>
  )
}
