import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import {Repo} from '../repo/types'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        flex: 1
    },
    detailContainer: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        flexShrink: 1,
        marginTop: 10,
    },
    fullName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatar: {
        width: 80, 
        height: 80,
        alignSelf: 'center',
    },
    countContainer: {
        marginTop: 20,
        flexDirection: 'row', 
        alignItems: 'center'
    },
    count: {
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center'
    }
})

interface Props {
    item: Repo;
}

const RepoDetailsComponent = ({item}: Props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.owner.avatar_url }} style={styles.avatar} />
            
            <View style={styles.countContainer}>
                <View style={styles.count}>
                    <Text>{item.watchers}</Text>
                    <Text>Watchers</Text>
                </View>
                <View style={styles.count}>
                    <Text>{item.stargazers_count}</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.count}>
                    <Text>{item.forks}</Text>
                    <Text>Fork</Text>
                </View>
            </View>

            <View style={styles.detailContainer}>
                <Text style={styles.fullName}>{item.full_name}</Text>
                <Text ellipsizeMode="tail">{item.description}</Text>
            </View>
        </View>
    )
}

export default RepoDetailsComponent