import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { discoverData } from '@/types'
import Card from '../home/Card'

export default function CircleDynamic() {
    return (
        <FlatList
            data={discoverData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Card item={item} />
            )}
            showsVerticalScrollIndicator={false}
            className='mt-5'
        />
    )
}