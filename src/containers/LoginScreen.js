import React from 'react'
import BaseScreen from './BaseScreen'
import Header from '../components/Header'
import Logo from '../img/logo.png'
import LoginForm from '../components/LoginForm'

const align = 'right'

const LoginScreen = () => (
    <BaseScreen align={align}>
        <Header image={Logo} title="Login to continue" />
        <LoginForm align={align} />
    </BaseScreen>
)

export default LoginScreen
