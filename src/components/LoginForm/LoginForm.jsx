import { useForm } from 'react-hook-form';
import "./LoginForm.scss";

export const LoginForm = ()=> {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
		<form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
		<h1>Register</h1>
			<input className="email" type="email" placeholder="Email" {...register} />
      		<input className="name" type="text" placeholder="First Name" {...register} />
      		<input className="password" type="text" placeholder="Password" {...register} />
			<input className="submit" type="submit" />
    	</form>
  );
}
