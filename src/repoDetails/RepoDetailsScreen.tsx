import React, {useEffect} from 'react'
import {Alert, View, Image, Text, StyleSheet, Button, Linking} from 'react-native'
import {Repo, RepoListNavigationProp} from '../repo/types'
import RepoDetailsComponent from './RepoDetailsComponent'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 20
    }
})

interface Props {
    route: {
        params: Repo;
    };
    navigation: RepoListNavigationProp;
}

const handleOpenLink = (link: string) => () => {
    Linking.canOpenURL(link).then(supported => {
        if (supported) {
          Linking.openURL(link)
        } else {
          Alert.alert(`'Failed to open url: ${link}`)
        }
    });
}

const RepoDetailsScreen = ({route, navigation}: Props) => {
    const item = route.params

    useEffect(() => {
        navigation.setOptions({ title: item.name })
    }, [])

    return (
        <View style={styles.container}>
            <RepoDetailsComponent item={item} />
            <Button title="Go to repo" onPress={handleOpenLink(item.html_url)}/>
        </View>
    )
}

export default RepoDetailsScreen