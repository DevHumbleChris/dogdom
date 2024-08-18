import { View, Text } from 'react-native'
import React from 'react'
import { formatNumber } from '@/utils'

export default function UserStats() {
    return (
        <View className='mt-3 mb-4 items-center justify-evenly flex-row flex-1'>
            <View className='items-center'>
                <Text className='text-2xl font-sfProSemibold'>{formatNumber(98626)}</Text>
                <Text className='font-sfProRegular text-sm'>Praise</Text>
            </View>
            <View className='items-center'>
                <Text className='text-2xl font-sfProSemibold'>{formatNumber(369)}</Text>
                <Text className='font-sfProRegular text-sm'>Dynamic</Text>
            </View>
            <View className='items-center'>
                <Text className='text-2xl font-sfProSemibold'>{formatNumber(6869)}</Text>
                <Text className='font-sfProRegular text-sm'>Share</Text>
            </View>
        </View>
    )
}