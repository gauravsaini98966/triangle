// import React from "react";
// // import { Contect_Data } from "../Data/Contect";
// import { useState } from 'react';
// import { Contect_Data } from '../Data/Contect';

// // import '../Style/Style.cs s'


// function Contect() {


//     const [formValues, setFormValues] = useState({
//         email: '',
//         fullName: '',
//         contact: '',
//         services: [],
//         message: '',
//       });
//       const [errors, setErrors] = useState({});
    
//       const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
    
//         setFormValues((prevValues) => ({
//           ...prevValues,
//           [name]: type === 'checkbox' ? (checked ? [...prevValues[name], value] : prevValues[name].filter(item => item !== value)) : value,
//         }));
        
//         setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
    
//         // Simple validation
//         const newErrors = {};
//         if (formValues.email.trim() === '') {
//           newErrors.email = 'Email Address is required';
//         } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
//           newErrors.email = 'Invalid email format';
//         }
    
//         if (formValues.fullName.trim() === '') {
//           newErrors.fullName = 'Full Name is required';
//         }
    
//         if (formValues.contact.trim() === '') {
//           newErrors.contact = 'Contact Number is required';
//         } else if (!/^\d+$/.test(formValues.contact)) {
//           newErrors.contact = 'Invalid contact number';
//         }
    
//         if (formValues.services.length === 0) {
//           newErrors.services = 'Select at least one service';
//         }
    
//         if (Object.keys(newErrors).length > 0) {
//           setErrors(newErrors);
//         } else {
//           // Your form submission logic goes here
//           console.log('Form submitted:', formValues);
    
//           // Reset the form after submission
//           setFormValues({
//             email: '',
//             fullName: '',
//             contact: '',
//             services: [],
//             message: '',
//           });
    
//           setErrors({});
//         }
//       };
//   return (
//     <div className="Contect">
//       <div className="Contect_left">
//         <div className="Contect_left_1">
//           <input type="text" placeholder="Email Address*" />
//         </div>
//         <div className="Contect_left_2">
//           <input type="text" placeholder="Full Name*" required />
//           <input type="text" placeholder="Contact Number*" />
//         </div>

//         <div className="Contect_left_3">
//           <h2>
//             Select Services <span>*</span>
//           </h2>
//           <div className="Contect_left_checkbox">
//             <div className=" Contect_checkbox">
//               <input type="checkbox" />
//               <label>Website Development</label>
//             </div>
//             <div className=" Contect_checkbox">
//               <input type="checkbox" />
//               <label>Application Development</label>
//             </div>
//             <div className=" Contect_checkbox">
//               <input type="checkbox" />
//               <label>Local SEO</label>
//             </div>
//             <div className=" Contect_checkbox">
//               <input type="checkbox" />
//               <label>Digital Marketing</label>
//             </div>
//             <div className=" Contect_checkbox">
//               <input type="checkbox" />
//               <label>Social Media Management</label>
//             </div>
//           </div>

//           <div className="Contect_textarea">
//             <textarea  placeholder="Message" />
//           </div>

//           <div className="Contect_button">
//             <button>Send Message</button>
//           </div>
//         </div>
//       </div>

//       <div className="Contect_right">
//         <div className="Contect_right1">
//           {Contect_Data.map((product, index) => {
//             return (
//               <div className="Contect_right2" key={index} >
//                 <h1>{product.h1}</h1>

//                 <div>
                  
//                   {product.li && (
//                     <ul className="Contect_right3">
//                       {product.li.map((list, listIndex) => (
//                         <li key={listIndex}>{list}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contect;



import React, { useState } from 'react';
import { Contect_Data } from '../Data/Contect';

function Contect() {
  const [formValues, setFormValues] = useState({
    email: '',
    fullName: '',
    contact: '',
    services:[],
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? (checked ? [...prevValues[name], value] : prevValues[name].filter(item => item !== value)) : value,
    }));
    
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (formValues.email.trim() === '') {
      newErrors.email = 'This field is required. Please input a valid email.';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (formValues.fullName.trim() === '') {
      newErrors.fullName = 'This field is required. Please input your name.';
    }

    if (formValues.contact.trim() === '') {
      newErrors.contact = 'This field is required. Please input a phone number.';
    } else if (!/^\d+$/.test(formValues.contact)) {
      newErrors.contact = 'Invalid contact number';
    }

    if (formValues.services.length === 0) {
      newErrors.services = 'Select at least one service';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Your form submission logic goes here
      console.log('Form submitted:', formValues);

      // Reset the form after submission
      setFormValues({
        email: '',
        fullName: '',
        contact: '',
        // services: [],
        message: '',
      });

      setErrors({});
    }
  };

  return (
    <div className="Contect">
       
      <div className="Contect_left">
        <form onSubmit={handleSubmit}>
          <div className="Contect_left_1">
            <input
              type="text"
              placeholder="Email Address*"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <span className="error">{errors.email}</span>
          </div>
          <div className="Contect_left_2">
            <input
              type="text"
              placeholder="Full Name*"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
              required
            />
            <span className="error">{errors.fullName}</span>
            <input
              type="text"
              placeholder="Contact Number*"
              name="contact"
              value={formValues.contact}
              onChange={handleChange}
            />
            <span className="error">{errors.contact}</span>
          </div>

          <div className="Contect_left_3">
            <h2>
              Select Services <span>*</span>
            </h2>
           
            <div className="Contect_left_checkbox">
            <div className=" Contect_checkbox">
              <input type="checkbox" />
              <label>Website Development</label>
            </div>
            <div className=" Contect_checkbox">
              <input type="checkbox" />
              <label>Application Development</label>
            </div>
            <div className=" Contect_checkbox">
              <input type="checkbox" />
              <label>Local SEO</label>
            </div>
            <div className=" Contect_checkbox">
              <input type="checkbox" />
              <label>Digital Marketing</label>
            </div>
            <div className=" Contect_checkbox">
              <input type="checkbox" />
              <label>Social Media Management</label>
            </div>
          </div>
            <div className="Contect_textarea">
              <textarea
                placeholder="Message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
              />
            </div>

            <div className="Contect_button">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>

      


<div className="Contect_right">
<div className="Contect_right1">
  {Contect_Data.map((product, index) => {
    return (
      <div className="Contect_right2" key={index} >
        <h1>{product.h1}</h1>

        <div>
          
          {product.li && (
            <ul className="Contect_right3">
              {product.li.map((list, listIndex) => (
                <li key={listIndex}>{list}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  })}
</div>
</div>


      
    </div>
  );
}

export default Contect;







