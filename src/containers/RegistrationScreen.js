import React from 'react'
import BaseScreen from './BaseScreen'
import Header from '../components/Header'
import Logo from '../img/logo.png'
import RegistrationForm from '../components/RegistrationForm'

const align = 'left'

const LoginScreen = () => (
    <BaseScreen align={align}>
        <Header image={Logo} title="Registration" />
        <RegistrationForm align={align} />
    </BaseScreen>
)

export default LoginScreen
