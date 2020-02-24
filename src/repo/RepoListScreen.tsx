import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {connect, ConnectedProps} from 'react-redux'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
    },
})

const connector = connect()

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux 

const LoginScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>Repo List</Text>
        </View>
    )
}

export default connector(LoginScreen)
