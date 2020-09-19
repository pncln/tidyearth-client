import React from 'react'
import { View, StyleSheet } from 'react-native'

const ProfileScreenSpacer = ({ children }) => {
    return <View style={styles.spacer}>{children}</View>
}

const styles = StyleSheet.create({
    spacer: {
        flex: 1,
        margin: 15
    }
})

export default ProfileScreenSpacer