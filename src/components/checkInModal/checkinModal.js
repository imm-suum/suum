import React, { useState , useEffect } from 'react';
import {Modal} from '../Modal/Modal.js';
import {Form} from '../Form/Form.js';

const CheckInModal = ({todayHabits})=> {
  //set open state to false to hide
  const [modalOpen, setModalOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const toggleModal = ()=> {
    setModalOpen(!modalOpen);
	toggleForm();
  }

	const toggleForm = ()=>{
	setFormOpen(!formOpen);
	console.log(formOpen);
	}

  const closeModal = (e)=> {
    if (e.target.id === "modalClose") {
      toggleModal();
    }else{
      console.log("wrongID");
    }
  };

	const closeForm = (e)=>{
		if (e.target.id === "fClose"){
			toggleForm();
		}else{
			console.log("corn");
		}
	};


  //popup effect. show modal after 1.5 seconds
  useEffect(()=>{
    setModalOpen(!modalOpen);
    // const timer = setTimeout(()=> {
    //   setModalOpen(e => !e)
    // }, 1500);
    // return () => clearTimeout(timer);
  },[]);

  return (
    //modalOpen is true therefore show modal
    <div className="checkInModal">
      {modalOpen && (
        <Modal toggleModal={toggleModal} closeModal={closeModal} todayHabits={todayHabits} />
      )}

	  {formOpen && (
		  <Form toggleForm={toggleForm}/>
	  )}
    </div>

  );
};
export default CheckInModal;
