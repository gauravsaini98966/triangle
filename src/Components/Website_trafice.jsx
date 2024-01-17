import React from 'react'
import {Website} from '../Data/Website_trafice'

function Website_trafice() {
  return (
    <div className='Website_trafice'>
        <div className='Website_trafice_top'>{

            Website.map((product,index)=>{
                return(<div key={index} className='Website_trafice_top1'>
                <h3>{product.Heading}</h3>
                <h2>{product.Heading2}</h2>
                  </div>)
                
            })

        }
        


        </div>

       <div className='Website_trafice_bottom' >
        <form className=''>
            <div className='Website_trafice_bottom1'>
            <div className='Website_trafice_bottom2'>
                <label>Full Name<span> *</span></label>
                <input placeholder='Full Name' type='text'/>
            </div>
            <div className='Website_trafice_bottom2'>
                <label>Email Address<span> *</span></label>
                <input placeholder='Email' type='text'/>
            </div>
            <div className='Website_trafice_bottom2'>
                <label>Contact Number<span> *</span></label>
                <input placeholder='Contact' type='text'/>
            </div>

            </div>

            <div className='Website_trafice_button'>
            <button type='text'>GROW WITH US</button>
            </div>

          

        </form>
       </div>




    </div>

    
  )
}

export default Website_trafice