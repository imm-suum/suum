import React, { useState } from "react";
import { useFormik } from "formik";
import "./LoginForm.css";

export const LoginForm = ()=> {

    const validate = values =>{
        //business logic goes in this function. and gets loaded into the errors variable object below
        const errors ={}

        if (!values.email){
            errors.email = 'Required'
        } else if(values.email.length < 4){
            errors.email ='Must be 5 characters or more'
        }

        return errors 
    }

    const formik = useFormik({

        initialValues:{
            email:'',
            password: '',
            repassword: ''
        },
        validate,
        onSubmit: values =>{
            alert(JSON.stringify(values, null, 2))
        }
    })


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>

                <input 
                onChange={formik.handleChange} 
                VALUE={formik.values.email}  
                onBlur={formik.handleBlur} 
                id='email' 
                name='email' />
                {formik.touched.email && formik.errors.email? <div>{formik.errors.email}</div> : null}

                <label htmlFor="password">Password</label>
                <input type='password' onChange={formik.handleChange} VALUE={formik.values.password} id='password' name='password' />
                <label htmlFor="repassword">Password Again</label>
                <input type='password' onChange={formik.handleChange} VALUE={formik.values.repassword}id='repassword' name='repassword' />


                <button type="submit">Start</button>
            </form>
        </div>

    );
}