import React, {useEffect, useState} from "react";
import {validator} from "../../utils/validator";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";


const LoginForm = () => {
    const [data, setData] = useState({email: '', password: '', stayOn:false})
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

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }

    return (
                    <form onSubmit={handleSubmit}>
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

                        <CheckBoxField
                            value={data.stayOn}
                            onChange={handleChange}
                            name="stayOn"
                        >
                            Оставаться в системе
                        </CheckBoxField>

                        {/*{ Object.keys(errors).length === 0? <button type='submit'>Submit</button> : null }*/}
                        <button type='submit' className="btn btn-primary w-100 mx-auto" disabled={!isValid}>Войти
                        </button>
                    </form>
    )
}

export default LoginForm