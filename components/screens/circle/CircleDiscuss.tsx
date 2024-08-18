import { View, Text, FlatList } from 'react-native'
import React from 'react'
import DiscussCard from './DiscussCard'
import { discussData } from '@/types'

export default function CircleDiscuss() {
    return (
        <FlatList
            data={discussData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <DiscussCard discuss={item} />
            )}
            showsVerticalScrollIndicator={false}
            className='mt-2'
        />
    )
}