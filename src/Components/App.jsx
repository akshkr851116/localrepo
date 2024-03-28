import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Error from './Error'
import About from './About'
import Contact from './Contact'
import Adminhome from './Admin/Home/Adminhome'
import Maincategory from './Admin/Maincategory/Maincategory'
import Createmaincategory from './Admin/Maincategory/Createmaincategory'
import Updatemaincategory from './Admin/Maincategory/Updatemaincategory '
export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>   
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/admin' element={<Adminhome/>} />
            <Route path='/admin/Maincategory' element={<Maincategory/>}/>
           

            <Route path='/admin/Maincategory/create' element={<Createmaincategory/>}/>
            <Route path='/admin/Maincategory/update/:id' element={<Updatemaincategory/>}/>
            <Route path='/*' element={<Error/>}/>  
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}
