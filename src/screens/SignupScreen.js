import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../context/AuthContext'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Layout, Button, Input, Datepicker, Modal, Card } from '@ui-kitten/components'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birthDate, setBirthDate] = useState(null)
    
    const { state, signup, clearErrorMessage } = useContext(Context)
    var today = new Date();
    const century = new Date(today.getFullYear() - 100)

    // FOR BACKEND!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // function getAge(dateString) {
    //     var age = today.getFullYear() - date.getFullYear();
    //     var m = today.getMonth() - date.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    //         age--;
    //     }
    //     return age;
    // }

    useEffect(
        () => navigation.addListener('focus', () => clearErrorMessage),
    []);

    return (
        <Layout style={styles.layout}>
            <View style={styles.container}>
                <Text style={styles.header} category="h4">New here?</Text>
                <Spacer /><Spacer />
                <Input 
                    disabled={state.formDisabled}
                    value={name}
                    label="Name"
                    onChangeText={value => setName(value)}
                />
                <Spacer />
                <Input
                    disabled={state.formDisabled}
                    value={email}
                    label='Email'
                    onChangeText={value => setEmail(value)}
                    autoCapitalize="none"
                />
                <Spacer />
                <Input
                    disabled={state.formDisabled}
                    value={password}
                    label='Password'
                    onChangeText={value => setPassword(value)}
                    autoCapitalize="none"
                    secureTextEntry
                />
                <Spacer />
                <Datepicker
                    disabled={state.formDisabled}
                    date={birthDate}
                    label="Date of Birth"
                    min={century}
                    onSelect={nextDate => { 
                        setBirthDate(nextDate)
                    }}
                />
                <Spacer /><Spacer /><Spacer />
                <Button disabled={state.formDisabled} onPress={ () => signup({name, email, password, birthDate }) }>
                    Sign Up
                </Button>
                <Spacer />
                <TouchableOpacity disabled={state.formDisabled} onPress={() => { navigation.navigate('Signin') }}>
                    <Text style={{ textAlign: 'center' }}>Or sign in</Text>
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
    }
})

export default SignupScreen