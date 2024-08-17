import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'

export default function CircleCarousel() {
    return (
        <View className='bg-[#F1EEF5] p-3 flex-1 w-[345px] mr-3 h-52 rounded-2xl'>
            <View className='flex-row items-center relative pt-8 px-1 overflow-hidden'>
                <View className='space-y-4 w-[240px]'>
                    <View>
                        <Text className='text-2xl font-sfProMedium'>How do you
                            create your circle?</Text>
                    </View>
                    <TouchableOpacity className='bg-black p-1.5 items-center rounded-md w-24'>
                        <Text className='text-white font-sfProRegular'>Create</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    source={images.karsten}
                    resizeMode='contain'
                    className='flex-shrink-0 absolute right-0 w-[90px]'
                />
            </View>
        </View>
    )
}