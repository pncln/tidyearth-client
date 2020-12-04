import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Card, Layout, Text } from '@ui-kitten/components'
import Spacer from '../components/Spacer'

const FeedScreen = ({ navigation }) => {
    return (
        <Layout style={styles.layout}>
            <View style={{ marginTop: 40, marginHorizontal: 15 }}>
                <Card style={{ alignSelf: 'stretch'}} status="primary">
                    <Text category="h4">Alex</Text>
                    <Spacer />
                    <Text category="h6">I just throw 3 kg of litter! Join me on Tidy.Earth.</Text>
                    <Spacer />
                    <Input
                        multiline={true}
                        placeholder='Add comment'
                    />
                </Card>
                <Spacer /><Spacer />
                <Card style={{ alignSelf: 'stretch'}} status="primary">
                    <Text category="h4">Mike</Text>
                    <Spacer />
                    <Text category="h6">My neighborhood is much cleaner now!</Text>
                    <Spacer />
                    <Input
                        multiline={true}
                        placeholder='Add comment'
                    />
                </Card>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1
    }
})

export default FeedScreen