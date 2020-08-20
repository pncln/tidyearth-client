import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Input, Layout, Button, Text, Toggle, Modal, Card } from '@ui-kitten/components'
import Spacer from '../components/Spacer'
import { Context } from '../context/AuthContext'

const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const { state, signin, clearErrorMessage } = useContext(Context)

    useEffect(
        () => navigation.addListener('focus', () => clearErrorMessage),
    []);

    const enabled = () => {
        if (buttonDisabled) {
            return disabled
        } else {
            return null
        }
    }

    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
    };

    const auth = () => {
        setButtonDisabled(true)
        signin({ email, password })
    }

    return (
        <Layout style={styles.layout}>
            <View style={styles.container}>
                <Text style={styles.header} category="h2">Hi there!</Text>
                <Spacer /><Spacer />
                <Input
                    value={email}
                    label='Email'
                    onChangeText={value => setEmail(value)}
                    autoCapitalize="none"
                />
                <Spacer />
                <Input
                    value={password}
                    label='Password'
                    onChangeText={value => setPassword(value)}
                    autoCapitalize="none"
                    secureTextEntry
                />
                <Spacer />
                
                <View style={{ display: 'flex', flexDirection: 'row'}}>
                    <Toggle style={styles.saveMe} checked={checked} onChange={onCheckedChange}>
                        Save Me
                    </Toggle>
                    <Spacer /><Spacer /><Spacer />
                    <Button 
                        { ...enabled }
                        onPress={ () => {
                            auth()
                        }}
                        style={{ flex: 1 }}>
                        Log In
                    </Button>
                </View>
                <Spacer /><Spacer />
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ textAlign: 'center' }}>Don't have an account?</Text>
                </TouchableOpacity>

                { state.modalVisible ? 
                <Modal
                    visible={true}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => clearErrorMessage()}>
                    <Card disabled={true}>
                        <Text>We got a problem here :(</Text>
                        <Text>{state.errorMessage}</Text>
                    </Card>
                </Modal> : null }
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '75%'
    },
    header: {
        textAlign: 'center'
    },
    saveMe: {
        alignSelf: 'center'
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
})

export default SigninScreen