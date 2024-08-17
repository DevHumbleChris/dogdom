import { Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Circle } from '@/types'

interface CircleListProps {
    circle: Circle
}

export default function CircleList({ circle }: CircleListProps) {
    return (
        <TouchableOpacity className='mr-5 items-center space-y-1'>
            <Image
                source={{
                    uri: circle.image
                }}
                resizeMode='cover'
                className='w-20 h-20 rounded-full'
            />
            <Text className='font-sfProRegular text-xs text-gray-400'>{circle.name}</Text>
        </TouchableOpacity>
    )
}