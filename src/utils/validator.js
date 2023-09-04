export function validator(data, config) {
    const errors={}
    function validate(validateMethod, data, config) {
        let statusValidate
        switch (validateMethod) {
            case 'isRequired':
                statusValidate = data.trim() ===''
                break;
            case 'isEmail':{
                const emailRegExp = /^\S+@\S+\.\S+$/g
                statusValidate = !emailRegExp.test(data)
            }
                break
            case 'isCapitalSymbol':{
                const capitalRegExp = /[A-Z]+/g
                statusValidate = !capitalRegExp.test(data)
            }
                break
            case 'isNumberSymbol':{
                const namberRegExp = /\d+/g
                statusValidate = !namberRegExp.test(data)
            }
                break
            case 'isMin':{
             statusValidate = data.length < config.value
            }
                break

            default:
                break
        }
        if (statusValidate) return  config.message
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {

            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod])
            if (error && !errors[fieldName]) { // --------------------------?????????????????????????????
                errors[fieldName] = error
            }
        }
    }

    return errors
}