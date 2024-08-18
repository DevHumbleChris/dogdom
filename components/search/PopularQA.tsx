import { View, Text, Image } from 'react-native'
import React from 'react'
import { Hashtag } from '../svg/Hashtag'
import { popularQA } from '@/types'

export default function PopularQA() {
    return (
        <View className='flex-1 space-y-3'>
            <Text className='text-xl font-sfProMedium'>Popular Q&A</Text>
            <View className='space-y-1'>
                {
                    popularQA.map(popular => (
                        <View key={popular.id} className='flex-row gap-4'>
                            <Hashtag />
                            <View className='flex-1 flex-row'>
                                <View className='flex-1 space-y-1'>
                                    <Text className='text-lg font-sfProRegular'>
                                        {popular.topic}
                                    </Text>
                                    <Text className='text-sm font-sfProRegular text-gray-600'>
                                        {popular.answer}
                                    </Text>
                                </View>
                                <Image source={{
                                    uri: popular.image
                                }}
                                    resizeMode='cover'
                                    className='h-16 w-[30%] flex-shrink-0 rounded-xl'
                                />
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}