import React, { useEffect, useContext, useState, useCallback } from 'react'
import { StyleSheet, Dimensions, View, ScrollView, RefreshControl } from 'react-native'
import { Layout, Text, Divider, Card, Modal, Button } from '@ui-kitten/components'
import { Context as AuthContext } from '../context/AuthContext'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Stats from '../components/Stats'
import Spacer from '../components/Spacer'
import ProfileScreenSpacer from '../components/ProfileScreenSpacer'
// import LogoutButton from '../components/LogoutButton'

const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

const ProfileScreen = ({ navigation }) => {
    const { state, signout, fetchData, fetchAvatar, clearErrorMessage } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [refreshing, setRefreshing] = useState(false);

    const logout = async () => {
        await signout()
    }
    
    useEffect(() => {
        async function fetch () {
            navigation.addListener('focus', () => clearErrorMessage)
            try {
                await fetchData(state.token)
                if (state.data.avatar) {
                    await fetchAvatar(state.token)
                    if (state.errorMessage) {
                        throw new Error(state.errorMessage)
                    }
                }
                

                setLoading(false)
            } catch (e) {
                setLoading(false)
                setError(true)
            }
        }
        fetch()
    }, [])

    const onRefresh = useCallback(() => {
        setRefreshing(true);
    
        wait(2000).then(() => setRefreshing(false));
      }, []);

    const Profile = () => {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Header name={state.data.name} />
                <Divider />
                
                <ProfileScreenSpacer>
                    <View style={styles.mainContent}>
                        <Stats />
                        <Spacer />
                        <Button 
                            onPress={() => {
                                logout();
                            }}
                            status='danger'>
                                Sign Out
                        </Button>
                        {/* <LogoutButton /> */}
                    </View>
                </ProfileScreenSpacer>

            </ScrollView>
        )
    }

    return (
        <Layout style={styles.layout}>
            <View style={styles.container}>
                { loading && !error ? <Loader /> : null}
                    { !loading && !error ? <Profile /> : null}
                    { !loading && error ? <Modal
                        visible={true}
                        backdropStyle={styles.backdrop}
                        onBackdropPress={() => setError(false)}>
                        <Card disabled={true}>
                            <Text>We got a problem here :(</Text>
                            <Text>{state.errorMessage}</Text>
                        </Card>
                    </Modal> : null}
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1
    },
    container: {
        flex: 1
    },
    mainContent: {
        flex: 1,
        justifyContent: 'space-between'
    },
    scrollView: {
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
})

export default ProfileScreen