import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { BackIcon } from '@/components/svg/Back'
import { SearchBig } from '@/components/svg/SearchBig'
import { MoreBig } from '@/components/svg/MoreBig'
import { useRouter } from 'expo-router'

export default function CircleHeaderNavigations() {
    const router = useRouter()
    return (
        <View className='flex-row items-center justify-between'>
            <TouchableOpacity onPress={() => router.back()}>
                <BackIcon />
            </TouchableOpacity>

            <View className='flex-row items-center gap-5'>
                <TouchableOpacity>
                    <SearchBig />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MoreBig />
                </TouchableOpacity>
            </View>
        </View>
    )
}