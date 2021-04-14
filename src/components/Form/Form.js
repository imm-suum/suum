import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Button/Button.scss';
import './Form.scss';

export const Form = ({toggleForm})=> {

  // type FormValues = {
  //   habit1: string;
  //   habit2: string;
  //   habit3: string;
  // };

  const {register, handleSubmit} = useForm();

  const onSubmit = (data)=> {
    console.log(data);
	toggleForm();
  }

  const handleClick = ()=> {
    console.log("click!");
  }

  return (
    <div className="modalWrapper" id="modalbackdrop" >
      <div className="formInner">
        <div className="formContent center-text">
          <h2 style={{color:"white", fontSize:"24px", marginBottom:"30px"}} className="extrabold">What do you want to do tomorrow?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="inputBg margin-y" id="habit1" placeholder="take a 5min walk" {...register("habit1")} />

                <input className="inputBg margin-y" id="habit2" placeholder="take a 5min walk" {...register("habit2")} />

                <input className="inputBg margin-y" id="habit3" placeholder="take a 5min walk" {...register("habit3")} />

				{/*
				<a href="" className="helpLink">Need help finding a habit?</a>
				*/}

              <input class="btn btn-lg btn-yellow bottomBtn" type="submit" value="Let's Go!"/>
            </form>
          </div>
      </div>
    </div>
  );
};
