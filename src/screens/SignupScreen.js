import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Layout, Button, Input, Datepicker } from '@ui-kitten/components'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [date, setDate] = useState(null)

    return (
        <Layout style={styles.layout}>
            <View style={styles.container}>
                <Text style={styles.header} category="h2">New here?</Text>
                <Spacer /><Spacer />
                <Input 
                    value={name}
                    label="Name"
                    onChangeText={value => setName(value)}
                />
                <Spacer />
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
                <Datepicker
                    date={date}
                    label="Date of Birth"
                    onSelect={nextDate => setDate(nextDate)}
                />
                <Spacer /><Spacer /><Spacer />
                <Button>
                    Sign Up
                </Button>
                <Spacer />
                <TouchableOpacity onPress={() => { navigation.navigate('Signin') }}>
                    <Text style={{ textAlign: 'center' }}>Or sign in</Text>
                </TouchableOpacity>
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