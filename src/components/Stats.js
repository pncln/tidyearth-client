import React from 'react'
import { Card, Text } from '@ui-kitten/components'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Wallet from './svg/Wallet'
import Trash from './svg/Trash'
import Spacer from '../components/Spacer'

const Stats = () => {
    return (
        <View>
            <Card status='primary'>
                <Spacer>
                    <View style={styles.infoCard}>
                        <TouchableOpacity style={styles.singleContainer}>
                            <Trash />
                            <Spacer />
                            <Text appearance="hint">Litter</Text>
                            <View style={styles.litter}>
                                <Text category="h4">24</Text>
                                <Text appearance="hint">kg</Text>
                            </View>
                            
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.singleContainer}>
                            <Wallet />
                            <Spacer />
                            <Text appearance="hint">Wallet</Text>
                            <Text category="h4">3.45$</Text>
                        </TouchableOpacity>
                    </View>
                </Spacer>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    infoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    singleContainer: {
        alignItems: 'center',
        height: '100%'
    },
    litter: {
        flexDirection: 'row'
    }
})

export default Stats