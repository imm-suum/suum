import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import "./LoginForm.scss";

export const LoginForm = ()=> {
	const { register, handleSubmit, formState: { errors } } = useForm();	//HERE TOO "register"
	const history = useHistory();

	const onSubmit = data => {
		console.log(data);
		apiCall(data);
	}
	console.log(errors);

async function apiCall(d) {
	try {

		// fetch data from a url endpoint
		const loginCall = await axios.post(`/api/user/login`, {		//LOGIN CALL API? I COPIED THIS FROM REGISTERFORM
			phoneNumber: d.phoneNumber,
			password: d.password,
		  })
		.then(res=>{
			//redirect('/');
			//res.send();
			history.push("/");
		});
		//setHabits(data.json());
		//res.redirect('/');
		return loginCall;
	} catch(error) {
		console.log("error", error);
		// appropriately handle the error
	}
}

	// var regexConst = new RegExp('/\A\+?\d{11}\z/');

return (
	<div className="form-container">
	<form className="suumForm" onSubmit={handleSubmit(onSubmit)}>
	<h1>Login</h1>

		<input id="tel" type="tel" className="tel" placeholder="Phone Number" {...register("phoneNumber", {required: true, minLength:6, maxLength:14})} />
		{/* {errors.phoneNumber?.type != "pattern" && <span className="num">Phone number in E.164 format: +123456789</span>} */}

		<input id="password" className="password" type="password" placeholder="Password" {...register("password", {required:true, min:6, maxLength:16})} />
		{errors.password && <span className="error">Password Invalid!</span>}

		<input className="submit" type="submit" />
	</form>
	</div>
  );
}
