import React, { Component } from 'react'
import FormWrapper from '../components/FormWrapper'
import BaseInput from '../components/BaseInput'
import Button from '../components/Button'
import { validateRegisterForm } from '../services/validation'
import { authorizedAlert, validationErrorAlert } from '../services/alerts'

class RegistrationForm extends Component {
    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
    }

    onSubmit = () => {
        const { username, password, passwordConfirmation } = this.state
        const errors = validateRegisterForm({ username, password, passwordConfirmation })
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
                    onSubmitEditing={() => this.passwordConfirmationRef && this.passwordConfirmationRef.focus()}
                />
                <BaseInput
                    inputRef={ref => this.passwordConfirmationRef = ref}
                    label="Confirm Password"
                    align={align}
                    secureTextEntry
                    onChangeText={this.createOnChangeCallback('passwordConfirmation')}
                    value={this.state.passwordConfirmation}
                    onSubmitEditing={this.onSubmit}
                />
                <Button title="Registration" align={align} onPress={this.onSubmit}/>
            </FormWrapper>
        )
    }
}

export default RegistrationForm
