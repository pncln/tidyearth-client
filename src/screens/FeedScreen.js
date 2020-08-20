import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components'

const FeedScreen = () => {
    return (
        <Layout style={styles.layout}>
            <Text category="h1">Feed</Text>
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

export default FeedScreen