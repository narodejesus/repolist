import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {connect, ConnectedProps} from 'react-redux'

import {onFetchRepo, onFetchNextRepo, Query} from './actions'
import * as repoSelector from './selectors'
import RepoItem from './RepoItem'
import SearchBar from './SearchBar'
import {Repo, RepoListNavigationProp} from './types'
import {AppState} from '../reducerTypes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
    },
})

const mapDispatchToProps = (dispatch: Function) => ({
    onFetchRepo: onFetchRepo(dispatch),
    onFetchNextRepo: onFetchNextRepo(dispatch)
})

const mapStateToProps = (state: AppState) => ({
    items: repoSelector.getRepoList(state),
    currentPage: repoSelector.getCurrentPage(state)
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    navigation: RepoListNavigationProp;
}

type RenderItem = {
    item: Repo
}

const renderItem = (props: Props) => ({item}: RenderItem) => {
    const handleOnpress = () => props.navigation.navigate('REPO', item)

    return (
        <RepoItem item={item} onPress={handleOnpress} />
    )
}

const keyExtractor = (item: Repo, key: number) => `${item.id}-${key}`

const useFetchHandler = (props: Props, fetch: Function) => {
    const [isLoading, setLoading] = useState(false)

    const fetchPage = async (query: Query) => {
        setLoading(true)
        await fetch(query)
        setLoading(false)
    }

    return {isLoading, fetchPage}
}

const RepoListScreen = (props: Props) => {
    const [query, setQuery] = useState('')
    const {isLoading, fetchPage} = useFetchHandler(props, props.onFetchRepo)
    const {isLoading: isNextFetching, fetchPage: fetchNext} = useFetchHandler(props, props.onFetchNextRepo)

    const handleFetchNext = () => fetchNext({query, currentPage: props.currentPage})
    const handleOnSearchChange = (text: string) => {
        setQuery(text)
        fetchPage({query: text})
    }
    const handleRefresh = () => fetchPage({query})

    return (
        <View style={styles.container}>
            <SearchBar onChangeText={handleOnSearchChange}/>
            <FlatList
                refreshing={isLoading}
                onRefresh={handleRefresh}
                onEndReached={handleFetchNext}
                data={props.items}
                renderItem={renderItem(props)}
                keyExtractor={keyExtractor}
                onEndReachedThreshold={0.5}
                initialNumToRender={20}
            />
        </View>
    )
}

export default connector(RepoListScreen)
