import React, { useState } from 'react';
import {Form} from '../Form/Form.js';




export const PlanningModal = ()=> {
  const [formOpen, setFormOpen] = useState(true);

  const toggleForm = ()=> {
    setFormOpen(!formOpen);
  }

  // const closeForm = (e)=> {
  //   if (e.target.id==="modalbackdrop") {
  //     toggleForm();
  //   }else{
  //     console.log("wrongId");
  //   }
  // }



  return (
    <>
    {formOpen &&
      <Form toggleForm={toggleForm}/>
    }
      </>
  )
}
