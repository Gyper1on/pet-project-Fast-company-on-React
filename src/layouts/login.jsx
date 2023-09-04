import React, {useState, useEffect} from "react";
import TextField from "../component/textField";
import {validator} from "../utils/validator";


const Login = () => {

    const [data, setData] = useState({email: '', password: ''})
    const [errors, setErrors] = useState({})
    useEffect(() => {
        validate()
    }, [data])


    const validatorConfig = {
        email: {
            isRequired: {message: 'Электронная почта обязательна для заполнения'},
            isEmail: {message: 'Email введен некоректно'}
        },
        password: {
            isRequired: {message: 'Пароль обязателен для заполнения'},
            isCapitalSymbol: {message: 'Password должен содержать хотябы одну заглавную букву'},
            isNumberSymbol: {message: 'Password должен содержать хотябы одну цифру'},
            isMin: {
                message: 'Password должен содержать 8 символов',
                value: 8
            }
        }
    }
    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleChange = ({target}) => {
        setData((prevState) => ({...prevState, [target.name]: target.value}))
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }

    return (
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <form onSubmit={handleSubmit}>
                        <h3 className="mb-4">Login</h3>
                        <TextField label='Электронная почта'
                                   name='email'
                                   value={data.email}
                                   onChange={handleChange}
                                   error={errors.email}/>

                        <TextField label='Пароль'
                                   name='password'
                                   value={data.password}
                                   onChange={handleChange}
                                   type='password'
                                   error={errors.password}/>

                        {/*{ Object.keys(errors).length === 0? <button type='submit'>Submit</button> : null }*/}
                        <button type='submit' className="btn btn-primary w-100 mx-auto" disabled={!isValid}>Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login