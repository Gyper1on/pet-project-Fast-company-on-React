import React from "react";
import PropTypes from "prop-types";
import '../Forms.css'


const TextField =({label, type, value, onChange, name, error}) => {
    const getInputClasses =() => {
        return 'form-control' + (error ? ' is-invalid': '')
    }
    return(
        <div className='mb-4'>
            <label htmlFor={name}>{label}</label>
            <input type={type}
                   id={name}
                   value={value}
                   onChange={onChange}
                   name={name}
                   className={getInputClasses()}/>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

// <form className="form">
//     <ul className="wrapper">
//
//         <li style="--i:4;"><input className="input" type="text" placeholder="Name" required=""></li>
//
//         <li style="--i:2;"><input className="input" type="email" placeholder="E-mail" required="" name="email"></li>
//         <button style="--i:1;">Submit</button>
//     </ul>
// </form>


TextField.defaultProps = {
    type: 'text'
}
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    error: PropTypes.string

}

export default TextField