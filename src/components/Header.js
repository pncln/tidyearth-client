import React, { useRef, useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Icon, Button, Divider } from '@ui-kitten/components'
import Avatar from './Avatar'
import Spacer from './Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const Header = (props) => {
    const pulseIconRef = useRef();
    const { state: { avatar } } = useContext(AuthContext)

    const renderPulseIcon = (props) => (
        <Icon
          {...props}
          ref={pulseIconRef}
          animation='pulse'
          name='share-outline'
        />
    );

    const Header = () => {
        return (
            <>
                <Image
                    style={styles.image}
                    source={{
                        uri: `data:image/jpeg;base64,${avatar}`
                    }}
                    resizeMode='cover'
                    blurRadius={3}
                />
        
                {/* <Button
                    onPress={() => pulseIconRef.current.startAnimation()}
                    appearance='ghost' status="success" accessoryLeft={renderPulseIcon} style={styles.linkButton}>
                        SHARE
                </Button> */}

                <View style={styles.containerSpaced}>
                    <View style={styles.avatar}>
                        <Avatar avatar={avatar} />
                    </View>
                    
                    <Spacer />
                    <View>
                        <Text category="h5" style={styles.paragraph}>{props.name}</Text>
                    </View>
                </View>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: '100%',
        justifyContent: 'center'
    },
    containerSpaced: {
        alignItems: 'center',
        marginHorizontal: 25
    },
    avatar: {
        width: 104,
        height: 104,
        borderRadius: 52,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    paragraph: { color: '#FFF', textShadowColor: 'black', textShadowRadius: 1, textShadowOffset: { 
        width: 1,
        height: 1
    }}, 
    abs: {
    position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0
    },
    context: {
        flex: 1,
        flexDirection: 'column'      
    },
    image: {
        height: 250,
        width: '100%',
        top:0, left: 0,
        position: 'absolute'
    },
    linkButton: {
        position: 'absolute',
        bottom: 0, right: 0
    },
    nameHeader: {
        color: 'white'
    }
})

export default Header