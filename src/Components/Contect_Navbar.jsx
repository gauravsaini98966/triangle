import React from 'react'
import ContactUs from './ContectUs_full'
import Map from '../Components/Location_map'
import Contect_appotment from './Contect_appotment'
function Contect_Navbar() {
  return (
    <div>
        <ContactUs/>
        
        <Contect_appotment/>
        <Map/>
    </div>
  )
}

export default Contect_Navbar