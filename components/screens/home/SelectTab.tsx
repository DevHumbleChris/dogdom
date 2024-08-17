import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import SelectListHeader from './SelectListHeader'
import Card from './Card'
import { selectData } from '@/types'

export default function SelectTab() {
    return (
        <FlatList
            data={selectData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Card item={item} />
            )}
            ListHeaderComponent={() => (
                <SelectListHeader />
            )}
            className='w-full h-full px-4 py-3'
        />
    )
}