import CircleListHeader from '@/components/screens/circle/CircleListHeader'
import CircleToJoin from '@/components/screens/circle/CircleToJoin'
import { popularCircle } from '@/types'
import React from 'react'
import { FlatList, ScrollView, Text } from 'react-native'

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