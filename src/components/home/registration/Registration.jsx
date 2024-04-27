import React from 'react'
import './../../../App.css';
  
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Registration = () => {
    const SignupSchema = Yup.object().shape({
        username: Yup.string()
        .min(4, "too short")
        .max(6, "too long")
        .required(),
        email: Yup.string()
        .email("invalid email")
        .required(),
        password: Yup.string()
        .min(6, "too short")
        .max(10, "too long")
        .required(),

    })
    
    const formik = useFormik({
        initialValues: {
            username: '',
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
            alert(JSON.stringify(values, null, 2))
        },
        validationSchema: SignupSchema
    })
    
  return (
    <>
    
    <br/>
    <br/>
    
    <form onSubmit={formik.handleSubmit} className="form-container">
    
    <div className="form-control">
      <label htmlFor="username" className="label">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        className="input"
      />
      <span className="error-message">{formik.errors.username}</span>
    </div>
    <div className="form-control">
      <label htmlFor="email" className="label">
        Email address
      </label>
      <input
        type="text"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        className="input"
      />
      <span className="error-message">{formik.errors.email}</span>
      <small className="form-text text-muted"> (We'll never share your email.)</small>
    </div>
    <div className="form-control">
      <label htmlFor="password" className="label">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        className="input"
      />
      <span className="error-message">{formik.errors.password}</span>
    </div>
    <button type="submit" className="button">
      Signup
    </button>
  </form>
  </>
  )
}

export default Registration