import { View, Text, Image } from 'react-native'
import React from 'react'
import { Discuss } from '@/types'
import { formatNumber } from '@/utils'

interface DiscussCardProps {
    discuss: Discuss
}

export default function DiscussCard({ discuss }: DiscussCardProps) {
    return (
        <View className='space-y-1 mb-5'>
            <Text className='text-lg font-sfProMedium font-medium'>
                {discuss.topic}
            </Text>
            <View className='flex-row items-center space-x-2'>
                <Image
                    className='rounded-full h-8 w-8'
                    source={{
                        uri: discuss.user.avatar
                    }}
                    resizeMode='cover'
                />
                <Text className='text-base font-sfProRegular'>
                    {discuss.user.name}
                </Text>
            </View>
            <Text className='font-sfProRegular text-md text-gray-600'>
                {discuss.content}
            </Text>

            <View className='flex-row items-center space-x-5'>
                <Text className='text-xs text-gray-500 font-sfProTextRegular'>
                    {formatNumber(discuss.likes)} Likes
                </Text>
                <Text className='text-xs text-gray-500 font-sfProTextRegular'>
                    {formatNumber(discuss.comments)} Comments
                </Text>
            </View>
        </View>
    )
}