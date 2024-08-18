import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { popularCircle } from '@/types'
import CircleList from '../screens/circle/CircleList'

export default function HotCircle() {
    return (
        <View className='mb-5 flex-1 space-y-3'>
            <View className='flex-row items-center justify-between'>
                <Text className='text-xl font-sfProMedium'>Hot Circle</Text>
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