import React from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        alignItems: 'center'
    },
})

const LoadingIndicator = () => {
    return (
        <View style={styles.container} >
            <ActivityIndicator />
        </View>
    )
}

export default LoadingIndicator