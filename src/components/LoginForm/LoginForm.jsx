import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import "./LoginForm.scss";

export const LoginForm = ()=> {
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
		<form onSubmit={handleSubmit(onSubmit)}>
			<input id="name" type="text" placeholder="Full Name" {...register("name")} />
			<input id="email" type="email" placeholder="Email" {...register("email")} />
			<input id="password" type="text" placeholder="Password" {...register("password")} />
			<input id="notifications" type="checkbox" placeholder="Notifications" {...register("notifications")} />

			<input type="submit" />
		</form>
  );
}
