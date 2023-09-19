import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";


const MultiSelectField = ({options, onChange, name, label}) => {

    let optionsArray = !Array.isArray(options) && typeof(options) === 'object'  ?
        Object.keys(options).map(optionName => ({label: options[optionName].name, value: options[optionName].value})): options

    const handleChange = (value) => {
        onChange({name: name, value})
    }

    return(
        <>
        <label className="form-label">{label}</label>
        <div className='mb-4'>
            <Select
                isMulti
                options={optionsArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                name={name}
                closeMenuOnSelect={false}
                placeholder="Выбрать..."/>
        </div>
</>
    )
}

MultiSelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string
}

export default MultiSelectField