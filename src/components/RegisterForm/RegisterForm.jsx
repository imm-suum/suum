import React from 'react';
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
	console.log(errors);

async function apiCall(d) {
	try {

		// fetch data from a url endpoint
		const registerCall = await axios.post(`/api/user/register`, {
			name: d.name ,
			email: d.email,
			password: d.password,
			notifications: d.notifications
		  })
		.then(res=>{
			//redirect('/');
			//res.send();
			history.push("/");
		});
		//setHabits(data.json());
		//res.redirect('/');
		return registerCall;
	} catch(error) {
		console.log("error", error);
		// appropriately handle the error
	}
}



return (
	<div className="form-container">
	<form className="suumForm" onSubmit={handleSubmit(onSubmit)}>
	<h1>Register</h1>
		<input id="name" className="name" type="text" placeholder="Full Name" {...register("name", {required:true, minLength:1, maxLength:35})} />
		<input id="email" className="email" type="email" placeholder="Email" {...register("email", {required:true, minLength:1, maxLength:35})} />
		<input id="password" className="password" type="password" placeholder="Password" {...register("password", {required:true, minLength:6, maxLength:35})} />
		{errors.password?.type === "minLength" && <span className="error">Please Input 6 Characters for Password!</span>}
		<div className="notifContainer">
			<input id="notifications" type="checkbox" placeholder="Notifications" {...register("notifications")} />
			<label htmlFor="notifications" style={{marginLeft: "0.5rem"}}>Turn On Notifications</label>
		</div>

		<input className="submit" type="submit" />
	</form>
	</div>
  );
}
