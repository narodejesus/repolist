import * as React from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native'

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 5,
    },
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 0.5,
        borderRadius: 5
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
        {!hasError || <Text style={styles.error}>Please complete the form</Text>}
    </View>
)

export default InputText