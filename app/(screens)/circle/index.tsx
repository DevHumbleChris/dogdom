import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { popularCircle } from '@/types'
import CircleToJoin from '@/components/screens/circle/CircleToJoin'
import CircleListHeader from '@/components/screens/circle/CircleListHeader'

export default function CircleScreen() {
    return (
        <FlatList
            data={popularCircle}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <CircleToJoin circle={item} />
            )}
            className='flex-1 bg-white px-4 py-2'
            ListHeaderComponent={() => (
                <CircleListHeader />
            )}
            showsVerticalScrollIndicator={false}
        />
    )
}