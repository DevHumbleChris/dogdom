import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Circle } from '@/types'
import { formatNumber } from '@/utils'
import { Link } from 'expo-router'

interface CircleToJoinProps {
    circle: Circle
}

export default function CircleToJoin({ circle }: CircleToJoinProps) {
    return (
        <Link href="/circle/2" asChild>
            <TouchableOpacity className='flex-row pb-4 items-center justify-between'>
                <View className='flex-row items-center gap-3'>
                    <Image
                        source={{
                            uri: circle.image
                        }}
                        resizeMode='cover'
                        className='w-16 h-16 rounded-full'
                    />
                    <View>
                        <Text className='font-sfProRegular text-base'>{circle.name}</Text>
                        <Text className='font-sfProTextRegular text-gray-500 text-xs -mt-1'>
                            {formatNumber(circle.members)} Members
                        </Text>
                    </View>
                </View>
                <TouchableOpacity className='bg-primary p-1 items-center rounded-md w-24'>
                    <Text className='text-white font-sfProRegular'>Joined</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </Link>
    )
}