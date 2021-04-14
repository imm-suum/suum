import React, { useState , useEffect } from 'react';
import {Modal} from '../Modal/Modal.js';

const CheckInModal = ()=> {
  //set open state to false to hide
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = ()=> {
    setModalOpen(!modalOpen);
  }

  const closeModal = (e)=> {
    if (e.target.id === "modalbackdrop") {
      toggleModal();
    }else{
      console.log("wrongID");
    }
  };

  //popup effect. show modal after 1.5 seconds
  useEffect(()=>{
    const timer = setTimeout(()=> {
      setModalOpen(e => !e)
    }, 1500);
    return () => clearTimeout(timer); 
  },[]);

  return (
    //modalOpen is true therefore show modal
    <div className="checkInModal">
      {modalOpen && (
        <Modal toggleModal={toggleModal} closeModal={closeModal}/>
      )}
    </div>
    
  );
};
export default CheckInModal;
