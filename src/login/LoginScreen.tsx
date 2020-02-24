import React, {useState} from 'react'
import {View, StyleSheet, Button} from 'react-native'
import {connect, ConnectedProps} from 'react-redux'

import {isEmail, isNotEmpty} from '../common/validator'
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
    const [hasSubmit, setSubmit] = useState(false)


    const onSubmit = async () => {
        if(!isEmail(formValue.email) && !isNotEmpty(formValue.password)) {
            setSubmit(true)

            return
        }

        await props.onLogin(formValue)
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <InputText
                    placeholder="email"
                    onChangeText={setFormValue('email')}
                    value={formValue.username}
                    hasError={hasSubmit && !isEmail(formValue.email)}
                />
                <InputText
                    placeholder="password"
                    onChangeText={setFormValue('password')}
                    value={formValue.password}
                    hasError={hasSubmit && !isNotEmpty(formValue.password)}
                />
                <Button title="Login" onPress={onSubmit} />
            </View>
        </View>
    )
}

export default connector(LoginScreen)
