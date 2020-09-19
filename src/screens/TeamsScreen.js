import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components'

const TeamsScreen = () => {
    return (
        <Layout style={styles.layout}>
            <Text category="h1">Teams</Text>
            <Text category="h6" appearance="hint">Coming soon</Text>
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

export default TeamsScreen