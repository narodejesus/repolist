import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Repo, RepoListNavigationProp} from './types'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    detailContainer: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        flexShrink: 1
    },
    avatar: {
        width: 80, 
        height: 80
    }
})

type Props = {
    item: Repo;
    onPress: () => void;
}

const RepoItem = ({item, onPress}: Props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Image source={{ uri: item.owner.avatar_url }} style={styles.avatar} />
            <View style={styles.detailContainer}>
                <Text>{item.full_name}</Text>
                <Text numberOfLines={2} ellipsizeMode="tail">{item.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RepoItem