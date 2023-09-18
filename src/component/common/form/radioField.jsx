import React from "react";
import PropTypes from "prop-types";


const RadioField = ({options, onChange, name, value, label}) => {

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <>
            <label className="form-label">{label}</label>

            <div className='mb-4'>

                {options.map(option => (
                    <div key={option.name + "_" + option.value} className="form-check form-check-inline">
                        <input className="form-check-input"
                               type="radio"
                               name={name}
                               id={option.name + "_" + option.value}
                               value={option.value}
                               checked={option.value === value}
                               onChange={handleChange}
                        />
                        <label className="form-check-label"
                               htmlFor={option.name + "_" + option.value}> {option.name} </label>
                    </div>))}
            </div>
        </>)

}

RadioField.propTypes ={
        options:PropTypes.array,
        onChange:PropTypes.func,
        name:PropTypes.string,
        value:PropTypes.string,
        label:PropTypes.string
}


export default RadioField