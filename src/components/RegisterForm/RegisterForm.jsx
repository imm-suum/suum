import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import "./RegisterForm.scss";

export const RegisterForm = ()=> {
	const { register, handleSubmit, formState: { errors } } = useForm();

	
	const history = useHistory();

	const onSubmit = data => {
		console.log(data);
		apiCall(data);
	}

	async function apiCall(d) {
		try {
			// fetch data from a url endpoint
			const registerCall = await axios.post(`/api/user/register`, d )
			.then(res=>{
				history.push("/");
			});
			return registerCall;
		} catch(error) {
			console.log("error", error);
			// appropriately handle the error
		}
	}
	//var regexConst = new RegExp('/\A\+?\d{11}\z/');

return (
	<div className="form-container">
	<form className="suumForm" onSubmit={handleSubmit(onSubmit)}>
	<h1 className="RegisterTitle">Register</h1>
		<input id="name" className="name" type="text" placeholder="Full Name" {...register("name", {required:true, minLength:1, maxLength:35})} />

		<input id="tel" type="tel" className="tel" placeholder="Phone Number" {...register("phoneNumber", {required: true, minLength:6, maxLength:14 })} />
		{/* , pattern:regexConst {errors.phoneNumber?.type != "pattern" && <span className="num">Phone number in E.164 format: +123456789</span>} */}

		<input id="password" className="password" type="password" placeholder="Password" {...register("password", {required:true, minLength:6, maxLength:35})} />
		{errors.password?.type === "minLength" && <span className="error">Please Input 6 Characters for Password!</span>}

		<div className="notifContainer">
			<input id="notifications" type="checkbox" placeholder="Notifications" {...register("notifications")} />
			<label htmlFor="notifications" style={{marginLeft: "0.5rem"}}>Turn On Notifications</label>
		</div>

		<input className="submit" type="submit" value="Register"/>
	</form>
	</div>
  );
}
