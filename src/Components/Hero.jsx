// import React, { useEffect } from 'react';
// import particlesJS from 'particles.js';
// import Stats from 'stats.js';
// function Hero() {
//     useEffect(() => {
//       // Initialize particles.js
//       particlesJS("particles-js", {
//         // ... Your particles.js configuration
//       });
  
//       // Initialize stats.js
//       const stats = new Stats();
//       stats.setMode(0);
//       stats.domElement.style.position = 'absolute';
//       stats.domElement.style.left = '0px';
//       stats.domElement.style.top = '0px';
//       document.body.appendChild(stats.domElement);
  
//       // Update stats.js
//       const countParticles = document.querySelector('.js-count-particles');
//       const updateStats = () => {
//         stats.begin();
//         stats.end();
//         if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//           countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
//         }
//         requestAnimationFrame(updateStats);
//       };
//       requestAnimationFrame(updateStats);
  
//       // Clean up function
//       return () => {
//         // Perform cleanup if needed
//         // For example, if particles.js has a destroy function, call it here
//       };
//     }, []); // Run useEffect only once on component mount
  
//     return (
//       <div>
//         {/* particles.js container */}
//         <div id="particles-js"></div>
  
//         {/* Stats - count particles */}
//         <div className="count-particles">
//           <span className="js-count-particles">--</span> particles
//         </div>
//       </div>
//     );
//   }
  
//   export default Hero;
  

// import React from 'react';
// import Particles from 'react-particles-js';

// function Hero() {
//   const particlesParams = {
//     particles: {
//       number: {
//         value: 80,
//         density: {
//           enable: true,
//           value_area: 800,
//         },
//       },
//       color: {
//         value: '#ffffff',
//       },
//       shape: {
//         type: 'star',
//         stroke: {
//           width: 0,
//           color: '#000000',
//         },
//         polygon: {
//           nb_sides: 5,
//         },
//         image: {
//           src: 'img/github.svg',
//           width: 100,
//           height: 100,
//         },
//       },
//       opacity: {
//         value: 0.5,
//         random: false,
//         anim: {
//           enable: false,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false,
//         },
//       },
//       size: {
//         value: 0,
//         random: false,
//         anim: {
//           enable: false,
//           speed: 40,
//           size_min: 0.1,
//           sync: false,
//         },
//       },
//       line_linked: {
//         enable: true,
//         distance: 673.4330655635196,
//         color: '#000000',
//         opacity: 0.12025590456491421,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 6,
//         direction: 'none',
//         random: false,
//         straight: false,
//         out_mode: 'out',
//         bounce: false,
//         attract: {
//           enable: false,
//           rotateX: 600,
//           rotateY: 1200,
//         },
//       },
//     },
//     interactivity: {
//       detect_on: 'canvas',
//       events: {
//         onhover: {
//           enable: true,
//           mode: 'grab',
//         },
//         onclick: {
//           enable: true,
//           mode: 'push',
//         },
//         resize: true,
//       },
//       modes: {
//         grab: {
//           distance: 400,
//           line_linked: {
//             opacity: 1,
//           },
//         },
//         bubble: {
//           distance: 400,
//           size: 40,
//           duration: 2,
//           opacity: 8,
//           speed: 3,
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4,
//         },
//         push: {
//           particles_nb: 4,
//         },
//         remove: {
//           particles_nb: 2,
//         },
//       },
//     },
//     retina_detect: true,
//   };

//   return (
//     <div>
//       <Particles params={particlesParams} />

//       {/* Stats - count particles */}
//       <div className="count-particles">
//         <span className="js-count-particles">--</span> particles
//       </div>
//     </div>
//   );
// }

// export default Hero;

import {Hero_Data} from '../Data/Hero_Data'
import React from 'react'
import {Hero_Video} from '../Data/Hero_Data'
import { Link } from 'react-router-dom'
import Contect_Navbar from './Contect_Navbar'
function Hero() {
  return (
    <div>
        <section class="main-section">
<div class="arrow-animation">
  <div class="main-left">{
    Hero_Data.map((Product,index)=>{
        return(
            <div className='Main-left_1' key={index}>
                  <h1>{Product.h1}</h1>
     <h2>{Product.h2}</h2>
     <div class="main-left-btn">
    <Link to='/Contect_Navbar'><button>{Product.button}</button></Link>  
            </div>
          
     </div>
        )
    })
    
  }
     
  </div>
  <div class="main-right"> {
        Hero_Video.map((Product,index)=>{
            return(
                <div className='main-righ_1' key={index}>
                <video autoPlay loop muted playsInline>
                        <source src={Product.video} type="video/mp4"/>
                     </video>
                
                            </div>
            )
           

        })}
     
  </div>
</div>
</section>

    </div>
  )
}

export default Hero



