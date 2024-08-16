import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'

export default function SelectCarousel() {
    return (
        <View className='bg-rose-50 p-3 flex-1 w-[345px] mr-3 h-52 rounded-2xl'>
            <View className='flex-row items-center relative pt-5 px-1 overflow-hidden'>
                <View className='space-y-4 w-[240px]'>
                    <View>
                        <Text className='text-2xl font-sfProMedium'>Take me home</Text>
                        <Text className='font-sfProRegular text-base text-gray-600'>Take care of stray dogs, please take them home.</Text>
                    </View>
                    <TouchableOpacity className='bg-black p-1.5 items-center rounded-md w-24'>
                        <Text className='text-white font-sfProRegular'>Let me</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    source={images.dogShuffling}
                    resizeMode='contain'
                    className='flex-shrink-0 absolute -right-12'
                />
            </View>
        </View>
    )
}