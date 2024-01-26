import React from 'react'
import {Contect_appotment_Data} from '../Data/contact/Contect_appotmentdata'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useState } from 'react';
import '../Style/Responsive.css'
function Contect_appotment() {
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
    <div className='Contect_appotment'>
        <div className='Contect_appotment_left'>{
             Contect_appotment_Data.map((Product,index)=>{
           return( <div className='Contect_appotment_1' key={index}>
            <h1>{Product.h1}</h1>
            <h2>{Product.h2}</h2>
            <div className='Contect_appotment_2'>
                <span>{Product.location}</span>
                <h3>{Product.location_name}</h3>
            </div>
            <div className='Contect_appotment_6'> <h4>{Product.h4}</h4></div>
           
            <div className='Contect_appotment_3'>

                <span>{Product.contact}</span>
                <h4>{Product.contact_name}</h4>

            </div>
            <div className='Contect_appotment_4'>
                <span>{Product.phone}</span>
                <div className='Contect_appotment_5'>
                    <span>{Product.phone_icon}</span>
                    <h3>{Product.phone_no1}</h3>
                </div>
                <div className='Contect_appotment_5'>
                    <span>{Product.phone_icon}</span>
                    <h3>{Product.phone_no2}</h3>
                </div>
                <div className='Contect_appotment_5'>
                    <span>{Product.email_icon}</span>
                    <h3>{Product.email_name}</h3>
                </div>
            </div>
            <div className='Contect_appotment_6'>
              <span><a><FaFacebookF /></a></span>
              <span><a><FaInstagram /></a></span>
              <span><a><MdOutlineMail /></a></span>
            </div>

        </div>)
             })
        }
       

        </div>


        

        <div className='Contect_left_all'>
        <h1>Get a Free Quote</h1>
            <div className='Contect_left_all1'>
        <div className="Contect_left1">
         
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
      </div>
        </div>

       


    </div>
  )
}

export default Contect_appotment