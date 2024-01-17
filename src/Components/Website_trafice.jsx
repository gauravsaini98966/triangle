import React from 'react'
import {Website} from '../Data/Website_trafice'

function Website_trafice() {
  return (
    <div className='Website_trafice'>
        <div className='Website_trafice_top'>{
            Website.map((product,index)=>{
                <div key={index} className=''>
              <h3>{product.Heading}</h3>
              <h2>{product.Heading2}</h2>
                </div>
            })

        }
        


        </div>

        

    </div>
  )
}

export default Website_trafice