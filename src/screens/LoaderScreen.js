import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Spinner  } from '@ui-kitten/components'

const LoaderScreen = () => {
    return (
        <Layout style={styles.layout}>
            <Spinner size='giant'/>
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

export default LoaderScreen