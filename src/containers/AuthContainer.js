import React, { Component } from 'react'
import { ScrollView, View, Dimensions, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoginScreen from './LoginScreen'
import RegistrationScreen from './RegistrationScreen'
import TabPanel from '../components/TabPanel'
import LoginIcon from '../img/user.png'
import RegIcon from '../img/plus.png'

const LOGIN_SCREEN = 'LOGIN_SCREEN'
const REGISTRATION_SCREEN = 'REGISTRATION_SCREEN'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    scrollContainer: {
        height: '100%',
    },
})

class AuthContainer extends Component {
    state = {
        activeScreenId: LOGIN_SCREEN,
    }

    get tabs() {
        return [
            {
                id: LOGIN_SCREEN,
                image: LoginIcon,
                title: 'Login',
            },
            {
                id: REGISTRATION_SCREEN,
                image: RegIcon,
                title: 'Registration',
            },
        ].map(tab => ({
            ...tab,
            isActive: tab.id === this.state.activeScreenId,
            onPress: this.onTabPress,
        }))
    }

    onTabPress = tabId => {
        if (this.state.activeScreenId !== tabId && this.scrollRef) {
            const tabIndex = this.tabs.findIndex(({ id }) => id === tabId)
            this.scrollRef.scrollTo({ x: tabIndex * width, y: 0 })
        }
    }

    onScroll = ({ nativeEvent: { contentOffset } }) => {
        const { x } = contentOffset

        const tabIndex = Math.floor(x / width)
        const tabId = this.tabs[tabIndex].id

        this.setState({ activeScreenId: tabId })
    }

    render() {
        return (
            <KeyboardAwareScrollView contentContainerStyle={styles.container} bounces={false}>
                <ScrollView
                    horizontal
                    contentContainerStyle={styles.scrollContainer}
                    bounces={false}
                    decelerationRate="fast"
                    pagingEnabled
                    ref={ref => this.scrollRef = ref}
                    onScroll={this.onScroll}
                    showsHorizontalScrollIndicator={false}
                    keyboardDismissMode="on-drag"
                >
                    <LoginScreen />
                    <RegistrationScreen />
                </ScrollView>
                <TabPanel tabs={this.tabs} />
            </KeyboardAwareScrollView>
        )
    }
}

export default AuthContainer
