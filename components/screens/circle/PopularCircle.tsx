import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CircleList from './CircleList'
import { popularCircle } from '@/types'

export default function PopularCircle() {
    return (
        <View className='flex-1 space-y-2'>
            <View className='flex-row items-center justify-between'>
                <Text className='font-sfProRegular text-lg'>Popular Circle</Text>
                <TouchableOpacity>
                    <Text className='font-sfProTextRegular text-gray-500 text-sm'>More</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={popularCircle}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CircleList circle={item} />
                )}
                horizontal
                className='flex-1 w-full'
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}