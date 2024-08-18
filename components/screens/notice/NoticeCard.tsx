import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Notice } from '@/types'
import { BellIcon } from '@/components/svg/BellIcon'
import { DogdomLight } from '@/components/svg/DogdomLight'
import images from '@/constants/images'

interface NoticeCardProps {
    notice: Notice
}

export default function NoticeCard({ notice }: NoticeCardProps) {
    return (
        <View className='mb-5 mt-1 flex-1 flex-row space-x-3'>
            <View className='h-[55px] w-[55px] rounded-full items-center'>
                {
                    notice.type.name === 'circle' && (

                        <Image
                            source={{
                                uri: notice.type.avatar!
                            }}
                            className='h-full w-full rounded-full'
                            resizeMode='cover'
                        />
                    )
                }
                {
                    notice.type.name === 'notify' && (

                        <Image
                            source={images.bellNotice}
                            className='h-full w-full'
                            resizeMode='cover'
                        />
                    )
                }
                {
                    notice.type.name === 'app' && (

                        <Image
                            source={images.dogdomNotice}
                            className='h-full w-full'
                            resizeMode='cover'
                        />
                    )
                }
            </View>
            <View className='flex-1'>
                <View className='flex-row items-center justify-between'>

                    <Text className='text-lg font-sfProRegular font-semibold'>{notice.title}</Text><Text className='text-xs font-sfProRegular text-gray-400'>{notice.date}</Text>
                </View>
                <Text className='text-sm font-sfProRegular text-gray-500'>{notice.content}</Text>
            </View>
        </View>
    )
}