import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
      
    {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Address</h4>
                    <p className="mb-2"><i className="fa fa-map-marker me-3"></i>Noida sector 34</p>
                    <p className="mb-2"><a href='tel:9122994814' target= "_blank" rel="noreferrer" className='text-light'><i className="fa fa-phone me-2"></i>+91-9122994814</a></p>
                    <p className="mb-2"><a href='mailto:akshkr8511@gmail.com' target= "_blank" rel="noreferrer"  className='text-light'><i className="fa fa-envelope  me-2"></i>akshkr85111@gmail.com</a></p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
           
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Quick Links</h4>
                    <Link className="btn btn-link" to="/">Home</Link>
                    <Link className="btn btn-link" to="/about">About</Link>
                    <Link className="btn btn-link" to="/shop">Shop</Link>
                    <Link className="btn btn-link" to="/contact">Contact</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Policies</h4>
                    <Link className="btn btn-link" to="#">Privacy</Link>
                    <Link className="btn btn-link" to="#">Term & Condition</Link>
                    <Link className="btn btn-link" to="#">Refund Policy</Link>
                    <Link className="btn btn-link" to="#">FQA</Link>
                    <Link className="btn btn-link" to="#">Business Analysis</Link>
                </div>

                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative w-100">
                        <input className="form-control bg-white border-0 w-100 py-3 ps-4 pe-5" type="text"
                            placeholder="Your email"/>
                        <button type="button"
                            className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </>
  )
}
