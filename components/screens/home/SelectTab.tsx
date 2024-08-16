import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import SelectListHeader from './SelectListHeader'

export default function SelectTab() {
    return (
        <FlatList
            data={[{ id: '1' }]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Text>Hello {item.id}</Text>
            )}
            ListHeaderComponent={() => (
                <SelectListHeader />
            )}
            className='w-full h-full px-4 py-3'
        />
    )
}