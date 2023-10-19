import React from "react";
import PropTypes from "prop-types";



const SelectField = ({value,label, onChange, defaultOption, options, error, name}) => {

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return 'form-select' + (error ? ' is-invalid' : '')
    }


    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.values(options)
            : options
  // let optionsArray = !Array.isArray(options) && typeof(options) === 'object'  ?
  //       Object.keys(options).map(optionName => ({name: options[optionName].name, value: options[optionName].value})): options

    return (
        <div className='mb-4'>
                <label htmlFor={name} className="form-label">{label}</label>
                <select className={getInputClasses()}
                        id={name}
                        value={value}
                        name={name}
                        onChange={handleChange}>

                    <option disabled value="">{defaultOption}</option>

                    {optionsArray && optionsArray.map( option => <option
                        value={option.value}
                        key={option.value}>
                        {option.name}
                    </option>)}
                </select>

                { error && <div className="invalid-feedback">
                    {error}
                </div>}
        </div>
    )
}

SelectField.propTypes = {
    defaultOption: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default SelectField