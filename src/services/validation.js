import validate from 'validate.js'

const constraints = {
    username: {
        presence: true,
        email: true,
    },
    password: {
        length: {
            minimum: 6,
        },
    },
    passwordConfirmation: {
        equality: 'password',
    },
}

export const validateRegisterForm = ({ username, password, passwordConfirmation }) => validate({
    username,
    password,
    passwordConfirmation,
}, constraints)

export const validateLoginForm = ({ username, password }) => validate({
    username,
    password,
}, constraints)
