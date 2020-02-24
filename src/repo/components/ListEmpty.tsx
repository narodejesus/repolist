import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        alignItems: 'center'
    },
})

const ListEmpty = () => {
    return (
        <View style={styles.container} >
            <Text>Start searching a repository</Text>
        </View>
    )
}

export default ListEmpty