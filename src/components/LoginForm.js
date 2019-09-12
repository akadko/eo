import React, { Component } from 'react'
import FormWrapper from './FormWrapper'
import BaseInput from './BaseInput'
import Button from './Button'
import { validateLoginForm } from '../services/validation'
import { authorizedAlert, validationErrorAlert } from '../services/alerts'

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
    }

    onSubmit = () => {
        const { username, password } = this.state
        const errors = validateLoginForm({ username, password })
        if (errors) {
            validationErrorAlert()
        } else {
            authorizedAlert()
        }
    }

    createOnChangeCallback = field => value => this.setState({ [field]: value })

    render() {
        const { align } = this.props
        return (
            <FormWrapper align={align}>
                <BaseInput
                    label="Username"
                    keyboardType="email-address"
                    align={align}
                    autoCapitalize="none"
                    autoCompleteType="username"
                    autoCorrect={false}
                    onChangeText={this.createOnChangeCallback('username')}
                    value={this.state.username}
                    onSubmitEditing={() => this.passwordRef && this.passwordRef.focus()}
                />
                <BaseInput
                    inputRef={ref => this.passwordRef = ref}
                    label="Password"
                    align={align}
                    secureTextEntry
                    onChangeText={this.createOnChangeCallback('password')}
                    value={this.state.password}
                    onSubmitEditing={this.onSubmit}
                />
                <BaseInput label="Forgot Password?" onLabelPress={() => {}} align={align} />
                <Button title="Login" align={align} onPress={this.onSubmit} />
            </FormWrapper>
        )
    }
}

export default LoginForm
