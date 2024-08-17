import { FlatList } from 'react-native'
import React from 'react'
import Card from './Card'
import { discoverData } from '@/types'
import DiscoverListHeader from './DiscoverListHeader'

export default function DiscoverTab() {
    return (
        <FlatList
            data={discoverData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Card item={item} />
            )}
            ListHeaderComponent={() => (
                <DiscoverListHeader />
            )}
            className='w-full h-full px-4 py-3'
        />
    )
}