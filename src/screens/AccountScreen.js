import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Layout, Button } from '@ui-kitten/components';
import Earth from './svg/Earth'

const AccountScreen = () => {
    return (
        <Layout style={styles.layout}>
            <View style={styles.content}>
                <View style={styles.earth}>
                    <Earth/>
                </View>

                <Text category='h3' style={styles.header}>Tidy.Earth</Text>
                <Text category='h6' appearance='hint' style={styles.text}>Make the Earth tidy again</Text>
                <Button style={styles.getStarted}>Get Started</Button>
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
    content: {
        width: 150
    },
    header: {
        marginTop: 10,
        marginBottom: 250,
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        marginBottom: 20
    },
    earth: {
        height: 150
    },
    getStarted: {
    }
})

export default AccountScreen