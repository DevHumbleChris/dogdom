import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SmileIcon } from '@/components/svg/Smile'
import { Notification } from '@/components/svg/Notification'

export default function Header() {
    return (
        <View className='pt-4 flex-1 flex-row justify-evenly relative'>
            <View className='flex-row items-center justify-center gap-8'>
                <TouchableOpacity className='flex-col items-center self-start'>
                    <Text className='text-3xl font-sfProMedium'>Select</Text>
                    <SmileIcon />
                </TouchableOpacity>
                <TouchableOpacity className='self-start'>
                    <Text className='text-3xl font-sfProMedium'>Discover</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity className='self-start absolute right-5 top-6'>
                <Notification />
            </TouchableOpacity>
        </View>
    )
}