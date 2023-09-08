import React, {useState, useEffect} from "react";
import LoginForm from "../component/ui/loginForm";
import {useParams} from "react-router-dom";
import RegisterForm from "../component/ui/registerForm";

const Login = () => {
    const {type} = useParams()
    const [formType, setFormType] = useState(type === 'register' ? type : 'login')


    const toggleFormType = (params) => {
        setFormType(prevState => prevState === 'register'? 'login' : 'register')
    }

    return (
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {formType === 'register' ?
                        <>
                            <h3 className="mb-4">Регистрация</h3>
                            <RegisterForm/>
                            <p>Уже есть аккаунт? <a role="button" onClick={toggleFormType}>Вход</a></p>
                    </>:
                        <>
                            <h3 className="mb-4">Вход</h3>
                        <LoginForm/>
                            <p>Нет аккаунта? <a role="button" onClick={toggleFormType}>Зарегистрироваться</a></p>
                        </>}
                </div>
            </div>
        </div>
    )
}
export default Login