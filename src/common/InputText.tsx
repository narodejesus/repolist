import * as React from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native'

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        fontSize: 10
    }
})

interface Props {
    onChangeText: (text: string) => void;
    placeholder: string;
    value: string;
    hasError?: Boolean;
}

const InputText = ({onChangeText, placeholder, value, hasError}: Props) => (
    <View style={styles.inputContainer}>
        <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={styles.input}
            value={value}
        />
        {!hasError || <Text style={styles.error}>Please enter a {placeholder}</Text>}
    </View>
)

export default InputText