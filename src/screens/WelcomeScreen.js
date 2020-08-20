import React , { useContext} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Video } from 'expo-av'
import { Text, Layout, Button } from '@ui-kitten/components';
import { Context } from '../context/WelcomeContext'
import Earth from './svg/Earth'


const { height } = Dimensions.get("window");

const WelcomeScreen = () => {
    const { goSignIn } = useContext(Context)

    return (
        <Layout style={styles.layout}>
            <Video
                source={require('./assets/background-video.mp4')}
                rate={1.0}
                volume={1.0}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={styles.backgroundVideo}
            />
            <View style={styles.content}>
                <View style={styles.earth}>
                    <Earth/>
                </View>

                <Text category='h3' style={styles.header}>Tidy.Earth</Text>
                <Text category='h6' appearance='hint' style={styles.text}>Make the Earth tidy again</Text>
                <Button 
                    style={styles.getStarted}
                    onPress={() => goSignIn() }
                >Get Started</Button>
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
        color: 'white',
        textShadowColor: '#0E532A',
        textShadowRadius: 15,
        marginTop: 10,
        marginBottom: 250,
        textAlign: 'center'
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 20
    },
    earth: {
        height: 150
    },
    getStarted: {
    },
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
      }
})

export default WelcomeScreen