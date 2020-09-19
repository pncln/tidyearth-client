import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from '@ui-kitten/components'

const LogoutButton = () => {
    return (
        <View>
            <Button status='danger'>Sign Out</Button>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default LogoutButton