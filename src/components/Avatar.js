import React, { useRef, useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native'
import { Button, Icon } from '@ui-kitten/components'
import { Context as AuthContext } from '../context/AuthContext'

const Avatar = () => {
    const { state } = useContext(AuthContext)
    const editIconRef = useRef()
    const renderEditIcon = (props) => (
        <Icon
          {...props}
          ref={editIconRef}
          animation='pulse'
          name='edit-outline'
        />
    )
    return (
        <View style={styles.avatar}>
            <Image
                style={styles.avatarImage}
                source={{
                    uri: `data:image/jpeg;base64,${state.avatar}`
                  }}
            />
            <Button style={styles.editButton}
                onPress={() => editIconRef.current.startAnimation()}
                appearance='ghost' status="basic" accessoryLeft={renderEditIcon} style={styles.editButton}>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    avatarImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        alignSelf: 'center',
        
    },
    avatar: {
        shadowOpacity: 1,
        backgroundColor: 'white',
        width: 103,
        height: 103,
        borderRadius: 103,
        alignItems: 'center',
        justifyContent: 'center'
    },
    editButton: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        width:100,
        height: '50%',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100
    },
})

export default Avatar

