import React from 'react'
import {TextInput, View, StyleSheet} from 'react-native'
import debounce from 'lodash.debounce'

const styles = StyleSheet.create({
    container: {
        elevation: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2
    },
    input: {
        paddingHorizontal: 15,
    }
})

type Props = {
    onChangeText: (text: string) => void;
}

const SearchBar = ({onChangeText}: Props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                placeholder="Search Repository" 
                onChangeText={debounce(onChangeText, 500)}
            />
        </View>
    )
}

export default SearchBar