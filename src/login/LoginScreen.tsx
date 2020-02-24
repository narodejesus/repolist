import React, {useState} from 'react'
import {View, StyleSheet, Button} from 'react-native'
import {connect, ConnectedProps} from 'react-redux'

import {onLogin} from './actions'
import {LoginScreenNavigationProp} from './types'
import useForm from '../common/useForm'
import InputText from '../common/InputText'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        height: 300,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 10
    }
})

const mapDispatchToProps = (dispatch) => ({
    onLogin: onLogin(dispatch)
})

const connector = connect(
    null,
    mapDispatchToProps
)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen = (props: Props) => {
    const {setFormValue, formValue} = useForm({email: '', password: ''})

    const onSubmit = () => {
        props.onLogin(formValue)
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <InputText
                    placeholder="email"
                    onChangeText={setFormValue('email')}
                    value={formValue.username}
                    hasError
                />
                <InputText
                    placeholder="password"
                    onChangeText={setFormValue('password')}
                    value={formValue.password}
                />
                <Button title="Login" onPress={onSubmit} />
            </View>
        </View>
    )
}

export default connector(LoginScreen)
