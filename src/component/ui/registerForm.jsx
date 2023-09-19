import React, {useEffect, useState} from "react";
import {validator} from "../../utils/validator";
import TextField from "../common/form/textField";
import api from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";


const RegisterForm = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
        profession: '',
        sex: 'male',
        qualities:[],
        licence:false
    })

    const [professions, setProfessions] = useState()
    const [qualities, setQualities] = useState([])
    const [errors, setErrors] = useState({})

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data))
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                value: data[optionName]._id,
                label: data[optionName].name,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
    }, [])

    const handleChange = (target) => {
            setData((prevState) => ({...prevState, [target.name]: target.value}))
    }

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
        },
        profession: {
            isRequired: { message: 'Обязательно выберите вашу профессию'}
        },
        licence:{
            isRequired:{
                message: 'Вы не можете использовать наш сервис без подтверждения лицензионного соглашения'
            }
        }
    }

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

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

            <SelectField
                label="Выберите свою профессию"
                defaultOption="Выбрать..."
                options={professions}
                name="profession"
                onChange={handleChange}
                value={data.profession}
                error={errors.profession}
            />

            <RadioField
                options={[{name: 'Мужской', value: 'male'},
                {name: 'Женский', value: 'female'}]}
                onChange={handleChange}
                label='Выберите свой пол'
                value={data.sex}
                name='sex'/>

            <MultiSelectField
            options={qualities}
            onChange={handleChange}
            name='qualities'
            label='Выберите ваши качества'
            />

            <CheckBoxField
                name='licence'
                onChange={handleChange}
                value={data.licence}
                error={errors.licence}
            > Подтвердить <a className='license-link' role={"button"}>лицензионное соглашение</a> </CheckBoxField>

            <button type='submit' className="btn btn-primary w-100 mx-auto" disabled={!isValid}>Войти
            </button>
        </form>
    )
}
export default RegisterForm