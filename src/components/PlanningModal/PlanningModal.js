import React, { useState, useEffect } from 'react';
import {Form} from '../Form/Form.js';




export const PlanningModal = ()=> {
  const [formOpen, setFormOpen] = useState(false);

  const toggleForm = ()=> {
    setFormOpen(!formOpen);
  }

  const closeForm = (e)=> {
    if (e.target.id==="modalCloser") {
      toggleForm();
    }else{
      console.log("wrongId");
    }
  }

   //popup effect. show form after 1.5 seconds
   useEffect(()=>{
    const timer = setTimeout(()=> {
      setFormOpen(e => !e)
  	}, 0);
    return () => clearTimeout(timer);
  },[]);



  return (
    <>
    {formOpen &&
      <Form toggleForm={toggleForm} closeForm={closeForm}/>
    }
      </>
  )
}
