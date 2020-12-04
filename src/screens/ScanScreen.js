import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components'

const ScanScreen = () => {
    return (
        <Layout style={styles.layout}>
            <Text category="h1">Scan QR</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ScanScreen