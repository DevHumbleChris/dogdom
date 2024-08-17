import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import { Liked } from '@/components/svg/Like'
import { Comment } from '@/components/svg/Comment'
import { Share } from '@/components/svg/Share'
import { More } from '@/components/svg/More'
import { Post } from '@/types'
import { formatNumber } from '@/utils'

interface SelectCardProps {
    item: Post
}

export default function Card({ item }: SelectCardProps) {
    return (
        <View className='space-y-2 mb-6'>
            <View className='flex-row items-center justify-between'>
                <View className='flex-row gap-2 items-center'>
                    <Image
                        className='rounded-full h-8 w-8'
                        source={{
                            uri: item.info.avatar
                        }}
                        resizeMode='cover'
                    />
                    <View>
                        <Text className='text-base font-sfProRegular'>
                            {item.info.name}
                        </Text>
                        {
                            item.info.location && (
                                <Text className='text-xs font-sfProTextRegular -mt-2 text-gray-400'>{item.info.location}</Text>
                            )
                        }
                    </View>
                </View>
                <TouchableOpacity className='bg-primary p-1 items-center rounded-md w-24'>
                    <Text className='text-white font-sfProRegular'>Follow</Text>
                </TouchableOpacity>
            </View>
            <View className='space-y-2'>
                <Text className='font-sfProRegular text-gray-600 text-base'>
                    {item.post.content}
                </Text>
                <View className='space-y-2'>
                    {
                        item.post.images.length > 1 ? (
                            <View className='flex-row items-center gap-2 flex-wrap'>
                                {
                                    item.post.images.map((img, index) => (
                                        <View key={index} className='h-28 w-[120px]'>
                                            <Image
                                                source={{
                                                    uri: img
                                                }}
                                                resizeMode='cover'
                                                className='h-full w-full rounded-xl'
                                            />
                                        </View>
                                    ))
                                }
                            </View>
                        ) : item.post.images.map((img, index) => (
                            (
                                <Image key={index}
                                    source={{
                                        uri: img
                                    }}
                                    resizeMode='cover'
                                    className='h-60 rounded-xl'
                                />
                            )
                        ))
                    }
                    <View className='flex-row items-center justify-between'>
                        <View className='flex-row items-center gap-5'>
                            <TouchableOpacity className='flex-row items-center gap-1'>
                                <Liked />
                                <Text className='font-sfProRegular text-gray-400'>
                                    {formatNumber(item.likes)}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='flex-row items-center gap-1'>
                                <Comment />
                                <Text className='font-sfProRegular text-gray-400'>
                                    {formatNumber(item.comments)}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='flex-row items-center gap-1'>
                                <Share />
                                <Text className='font-sfProRegular text-gray-400'>
                                    {formatNumber(item.shares)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity >
                            <More />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}