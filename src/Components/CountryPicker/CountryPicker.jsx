import React, {useState,useEffect} from 'react'
import './CountryPicker.module.css';
import {Form} from 'react-bootstrap';

const url="https://covid19.mathdro.id/api";

const CountryPicker=(props)=> {
    const {countries}=props;

   


   var handleCountryChange=(e)=>{
      props.selectedCountry(e.target.value);
      console.log(e.target.value);
    }


    return (
      <div className="dropDown">
         <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>Select Country...</Form.Label>
              <Form.Control as="select" size="sm" custom style={{backgroundColor:"rgba(0,0,0,0.5)", color:"white"}}  onChange={handleCountryChange}> 
                  <option >Global</option>
                       {countries.map((country,i)=>{
                        return(
                          <option key={i} style={{backgroundColor:"rgba(0,0,0,0.5)", color:"white"}}>{country.name}</option>
                           )
                         })}
      
              </Form.Control>
         </Form.Group>
      </div>
    )
}

export default CountryPicker
