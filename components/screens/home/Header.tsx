import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SmileIcon } from '@/components/svg/Smile'
import { Notification } from '@/components/svg/Notification'

interface HeaderProps {
    onTabPress: (index: number) => void
    activeTab: number
}

export default function Header({ onTabPress, activeTab }: HeaderProps) {
    const handlePress = (active: number) => {
        onTabPress(active)
    }
    return (
        <View className='pt-4 flex-row justify-evenly relative'>
            <View className='flex-row items-center justify-center gap-8'>
                <TouchableOpacity onPress={() => handlePress(0)} className='flex-col items-center self-start'>
                    <Text className='text-xl font-sfProMedium'>Select</Text>
                    {
                        activeTab === 0 && (
                            <SmileIcon />
                        )
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress(1)} className='flex-col items-center self-start'>
                    <Text className='text-xl font-sfProMedium'>Discover</Text>
                    {
                        activeTab === 1 && (
                            <SmileIcon />
                        )
                    }
                </TouchableOpacity>
            </View>
            <TouchableOpacity className='self-start absolute right-3 top-5'>
                <Notification />
            </TouchableOpacity>
        </View>
    )
}